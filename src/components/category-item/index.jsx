import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { THEME } from "../../constants/theme";

const CategoryItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.contentContainer}
        onPress={() => {
          onSelected(item);
        }}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.weight}>{item.weight}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
