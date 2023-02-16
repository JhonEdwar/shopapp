import { useFonts } from "expo-font";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { THEME } from "./constants/theme";
import { Provider } from "react-redux";
import AppNavigator from "./navigation";
import { Categories } from "./screens";
import { styles } from "./styles";
import store from "./store";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  const [loaded] = useFonts({
    "SignikaNegative-Regular": require("../assets/fonts/SignikaNegative-Regular.ttf"),
    "SignikaNegative-Medium": require("../assets/fonts/SignikaNegative-Medium.ttf"),
    "SignikaNegative-Bold": require("../assets/fonts/SignikaNegative-Bold.ttf"),
    "SignikaNegative-Light": require("../assets/fonts/SignikaNegative-Light.ttf"),
  });
  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={THEME.colors.primary} />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
