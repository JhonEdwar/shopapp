import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

import { THEME } from "../constants/theme";
import { Categories, Products, ProductDetail } from "../screens/index";

const Stack = createNativeStackNavigator();

// arbol de navegacion
const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerTintColor: THEME.colors.primary,
        headerTitleStyle: { fontFamily: "SignikaNegative-Light", fontSize: 18 },
        headerShadowVisible: {
          borderBottonWidth: 1,
          elevation: 4,
          shadowOpacity: 0.2,
        },
      }}>
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
        options={
          ({ route }) => ({ title: route.params.title })

          // title: "Products",
          // headerRight: () => {
          //   return (
          //     <View>
          //       <Text>click here</Text>
          //     </View>
          //   );
          // },
        }
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
