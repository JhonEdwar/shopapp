import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'

import { styles } from "./styles";
import { THEME } from "../../constants/theme";

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{item.title}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.quantity}>qty: {item.quantity}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={22} color={THEME.colors.alert} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
