import React,{useEffect} from "react";
import { View, Text, Button, FlatList } from "react-native";

import { styles } from "./styles";
import { ProductItem } from "../../components";
// import { PRODUCTS } from "../../constants/data";
import { THEME } from "../../constants/theme";
import { useSelector, useDispatch } from 'react-redux';
import { selectProduct, filterProducts } from '../../store/actions';

const Products = ({ navigation, route }) => {
  // const { categoryId, title } = route.params;
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.selected);
  const filteredProducts = useSelector((state) => state.products.filteredProducts);

  const onSelected = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate('ProductDetail', {
      title: item.title,
    });
  };
  
  const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();

  useEffect(() => {
    dispatch(filterProducts(category.id));
  }, []);


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
