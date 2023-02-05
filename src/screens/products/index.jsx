import React from "react";
import { View, Text, Button } from "react-native";
import { theme } from "../../constants/theme";

import { styles } from "./styles";

const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <Button
        title="Go to product-detail"
        onPress={() => navigation.navigate("ProductDetail")}
        color={theme.colors.primary}
      />
    </View>
  );
};

export default Products;
