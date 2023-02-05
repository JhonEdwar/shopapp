import React from "react";
import { View, Text , Button} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import { styles } from "./styles";

const Categories = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Categories</Text>
      <Button title="Go to products" onPress={()=>navigation.navigate('Products')} color='#000' />
    </View>
  );
};

export default Categories;
