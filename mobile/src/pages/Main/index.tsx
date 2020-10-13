import React, { useCallback, useEffect, useState } from 'react';

import {
  Container,
  List,
  Card,
  Thumbnail,
  H1,
  Text,
  Button,
  Icon,
  Header,
  Content,
  H2,
  CardItem,
  Right,
  ListItem,
  Left,
  View,
  H3,
  ActionSheet
} from 'native-base';

import api from '../../services/api';
import formatPrice from '../../utils/formatPrice';
import { Alert, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Product {
  id: Number;
  title: string;
  type: string;
  filename: string;
  price: number;
  rating: number;
  createdAt: Date;
  formattedPrice: string;
  formattedDate: string;
}

const Main: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [reload, setReload] = useState(false)

  const navigation = useNavigation();

  useEffect(() => {
    getProducts()
  }, []);

  async function getProducts() {
    const response = await api.get<Product[]>('products');

    const formattedProducts = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
      formattedDate: new Date(product.createdAt).toLocaleDateString('pt-BR')
    }))

    setProducts(formattedProducts)
  }

  const handleRefresh = useCallback(() => {
    setReload(true);

    getProducts().then(() => {
      setReload(false)
    });
  }, []);

  const handleSelectedAction = useCallback(
    (action: number | undefined, productId: Number) => {
      if (action === 0) {
        navigation.navigate('EditProduct', { productId, products, setProducts });
      } else if (action === 1) {
        Alert.alert('', 'Are you sure you want to remove the product?', [{
          text: 'Cancel',
          style: "cancel"
        }, {
          text: 'Yes',
          onPress: async () => {
            try {
              await api.delete(`products/${productId}`);
              
              const productsWithoutRemoved = products.filter(product => product.id !== productId);
              
              setProducts(productsWithoutRemoved);

              Alert.alert('Success!', 'Product successfully removed!')
            } catch (e) {
              console.log(e.message);

              Alert.alert('Ooops!', 'Error removing the product. Please try again!')
            }
          },
        }])
      }
    },
  [products, setProducts]);

  return (
    <Container>
      <Content>
        <List
          dataArray={products}
          refreshControl={
            <RefreshControl refreshing={reload} onRefresh={handleRefresh} />
          }
          keyExtractor={(product: Product) => String(product.id)}
          renderItem={({ item: product }: { item: Product }) => (
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail square large source={{ 
                    uri: `http://192.168.0.26:8080/images/${product.filename}`
                  }} />
                  <View style={{ marginLeft: 8 }}>
                    <H2>{product.title}</H2>
                    <H3>{product.type}</H3>
                    <Text>{product.formattedDate}</Text>
                    <View style={{ flexDirection: 'row'}}>
                      {[1, 2, 3, 4, 5].map(number => {
                        if (number <= product.rating) {
                          return (
                            <Icon name="star" type="Ionicons" style={{ fontSize: 24 }} />
                          );
                        }

                        return (
                          <Icon name="star-outline" type="Ionicons" style={{ fontSize: 24 }} />
                        );
                      })}
                    </View>
                  </View>
                </Left>

                <Right>
                  <Button
                    transparent
                    onPress={() =>
                      ActionSheet.show(
                      {
                        options: ['Edit', 'Remove'],
                      },
                      buttonIndex => {
                        handleSelectedAction(buttonIndex, product.id);
                      }
                    )}
                  >
                    <Icon
                      name="more-horizontal"
                      type="Feather"
                      style={{fontSize: 40}}
                    />
                  </Button>
                  <H3>{product.formattedPrice}</H3>
                </Right>
              </CardItem>
            </Card>
          )}
        />
      </Content>
    </Container>
  );
}

export default Main;