import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { PRODUCTS } from "../../constants/data";

const Orders = ({ navigation, route }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orders</Text>
    </View>
  );
};

export default Orders;
