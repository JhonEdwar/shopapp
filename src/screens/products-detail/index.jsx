import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { PRODUCTS } from "../../constants/data";
import { useSelector } from "react-redux";

const ProductsDetail = ({ navigation }) => {
  const product = useSelector((state) => state.products.selected);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.title}>{product.description}</Text>
      <Text style={styles.title}>{product.weight}</Text>
      <Text style={styles.title}>${product.price}</Text>
    </View>
  );
};

export default ProductsDetail;
