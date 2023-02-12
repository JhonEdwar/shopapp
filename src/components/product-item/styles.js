import { StyleSheet } from "react-native";

import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    height: 110,
    backgroundColor: THEME.colors.primary,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "SignikaNegative-Regular",
    fontSize: 16,
    color: THEME.colors.white,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    fontFamily: "SignikaNegative-Regular",
    fontSize: 16,
    color: THEME.colors.white,
  },
  weight: {
    fontFamily: "SignikaNegative-Regular",
    color: THEME.colors.white,
    fontSize: 14,
  },
});
