import { StyleSheet } from "react-native";

import { theme } from "../../constants/theme";

// import { colors } from "../../constants/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "SignikaNegative-Bold",
    padding: 10,
    color: theme.colors.secundary,
  },
});
