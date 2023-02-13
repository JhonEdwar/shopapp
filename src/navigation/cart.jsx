import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { THEME } from "../constants/theme";
import { Cart } from "../screens";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        haderStyle: {
          backgroundColor: THEME.colors.white,
        },
        headerTintColor: THEME.colors.primary,
        navigationBarColor: THEME.colors.secundary,
        headerTitleStyle: {
          fontFamily: "SignikaNegative-Bold",
          fontSize: 18,
          color: THEME.colors.title,
        },
        headerShadowVisible: {
          borderBottonWidth: 1,
          elevation: 4,
          shadowOpacity: 0.2,
        },
      }}>
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
