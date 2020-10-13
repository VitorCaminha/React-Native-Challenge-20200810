import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import EditProduct from './pages/EditProduct';

const AppStack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>    
      <AppStack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          cardStyle: {
            backgroundColor: '#F0F0F5'
          }
        }}
      >
        <AppStack.Screen name="Main" component={Main} options={{ title: 'Products List' }} />
        <AppStack.Screen name="EditProduct" component={EditProduct} options={{ title: 'Update Product' }} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;