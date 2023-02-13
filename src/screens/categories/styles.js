import { StyleSheet, StatusBar } from "react-native";

import { THEME } from "../../constants/theme";

// import { colors } from "../../constants/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.background,
    marginTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 20,
    fontFamily: "SignikaNegative-Bold",
    padding: 10,
    color: THEME.colors.secondary,
  },
  containerList:{
    flex: 1,
  },
  contentContainerList:{
    paddingBottom: 50,
  }
});
