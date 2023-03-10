import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { THEME } from "../../constants/theme";
import { formatDate } from "../../utils";

const OrderItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.date}>{formatDate(item.date)}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.total}>${item.total}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={22} color={THEME.colors.alert} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItem;
