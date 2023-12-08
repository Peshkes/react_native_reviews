import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from 'react';
import About from "../screens/about";

const Stack = createNativeStackNavigator();
const RouteAbout = () => {
    return (
        <Stack.Navigator initialRouteName={'About'}>
            <Stack.Screen name={"About"} component={About}/>
        </Stack.Navigator>
    );
};

export default RouteAbout;