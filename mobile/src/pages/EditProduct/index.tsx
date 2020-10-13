import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, Container, Content, Form, Input, Item, Label, Text } from 'native-base';
import { Alert } from 'react-native';
import api from '../../services/api';
import formatPrice from '../../utils/formatPrice';

// import { Container } from './styles';

interface Product {
  id: Number;
  title: string;
  type: string;
  description: string;
  filename: string;
  height: number;
  width: number;
  price: number;
  rating: number;
  formattedPrice: string;
}

interface RouteParam {
  productId: Number;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const EditProduct: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  const { productId, products, setProducts } = route.params as RouteParam;
  
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')

  useMemo(() => {
    const product = products.find(product => product.id === productId);

    if(product) {
      setTitle(product.title);

      setType(product.type);

      setPrice(String(product.price));
    }
  }, [productId])

  const handleSubmit = async () => {
    try {
      const response = await api.put(`products/${productId}`, {
        title,
        type,
        price: Number(price),
      })
      console.log(response.data)

      const updatedProducts = products.map(product => {
        return product.id === productId ? {
          ...response.data,
          formattedPrice: formatPrice(response.data.price),
          formattedDate: new Date(response.data.createdAt).toLocaleDateString('pt-BR')
        } : product
      })

      setProducts(updatedProducts)

      Alert.alert('Success!', 'Product successfully updated!');

      navigation.goBack();
    } catch (e) {
      console.log(e.message);

      Alert.alert('Ooops!', 'Error trying to update the product. Please try again!')
    }
  };

  return (
    <Container>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Title</Label>
            <Input
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </Item>
          <Item floatingLabel last>
            <Label>Type</Label>
            <Input
              value={type}
              onChangeText={(text) => setType(text)}
            />
          </Item>
          <Item floatingLabel last>
            <Label>Price</Label>
            <Input
              value={price}
              onChangeText={(text) => setPrice(text)}
            />
          </Item>

          <Button
            style={{ 
              width: '50%',
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: 32,
            }}
            onPress={handleSubmit}
          >
            <Text>Update</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

export default EditProduct;