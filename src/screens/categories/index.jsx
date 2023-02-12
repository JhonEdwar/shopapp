import React from "react";
import { View, Text, Button, FlatList, SafeAreaView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import { styles } from "./styles";
import { CategoryItem } from "../../components";
import { CATEGORIES } from "../../constants/data/index";
import { THEME } from "../../constants/theme";

const Categories = ({ navigation }) => {
  const onSelected = (item) => {
    navigation.navigate("Products", { categoryId: item.id, title: item.title });
  };
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.containerList}
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainerList}
      />
      <Text style={styles.title}>Categories</Text>
    </View>
  );
};

export default Categories;

/* <Button
title="Go to products"
onPress={() => navigation.navigate("Products")}
color={THEME.colors.primary}
/> */
