import { StyleSheet } from "react-native";

import { THEME } from "../../constants/theme";

// import { colors } from "../../constants/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "SignikaNegative-Bold",
    padding: 10,
    color: THEME.colors.secondary,
  },
});
