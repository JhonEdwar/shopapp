import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CartNavigator from "./cart";
import OrdersNavigator from "./orders";
import ShopNavigator from "./shop";
import { THEME } from "../constants/theme";

const BottomTab = createBottomTabNavigator()

const Tabs=()=>{
    return(
        <BottomTab.Navigator initialRouteName="ShopTab">
            <BottomTab.Screen name='ShopTab' component={ShopNavigator}/>
            <BottomTab.Screen name='OrderTab' component={OrdersNavigator}/>
            <BottomTab.Screen name='CartTab' component={CartNavigator}/>
        </BottomTab.Navigator>
    )
}

export default Tabs