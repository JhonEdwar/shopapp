import React from "react";
import { View, Text, Button, FlatList } from "react-native";

import { styles } from "./styles";
import { ProductItem } from "../../components";
import { PRODUCTS } from "../../constants/data";
import { THEME } from "../../constants/theme";

const Products = ({ navigation, route }) => {
  const { categoryId, title } = route.params;
  const filteredProducts = PRODUCTS.filter((product) => product.categoryId == categoryId);
  const onSelected = (item) => {
    navigation.navigate("ProductDetail", { productId: item.id, title: item.title });
  };
  const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.contentList}
        // onPress={() => navigation.navigate("ProductDetail")}
        // color={THEME.colors.primary}
      />
    </View>
  );
};

export default Products;
