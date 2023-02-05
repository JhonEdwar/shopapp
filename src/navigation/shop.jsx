import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Categories, Products, ProductDetail } from "../screens/index";

const Stack = createNativeStackNavigator();

// arbol de navegacion
const ShopNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          title: "Categories",
        }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          title: "Products",
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          title: "Product Detail",
        }}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
