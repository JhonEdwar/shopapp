import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { THEME } from "../../constants/theme";

const ProductItem= ({item, onSelected}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{...styles.contentContainer,backgroundColor:item.color}} onPress={()=>{onSelected(item)}}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
