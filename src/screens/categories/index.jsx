import React from "react";
import { View, Text, Button, FlatList, SafeAreaView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./styles";
import { CategoryItem } from "../../components";
// import { CATEGORIES } from "../../constants/data/index";
import { THEME } from "../../constants/theme";
import { selectCategory } from "../../store/actions";

const Categories = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products', {
      title: item.title,
    });
  };
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.containerList}
        data={categories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainerList}
      />
    </View>
  );
};

export default Categories;
