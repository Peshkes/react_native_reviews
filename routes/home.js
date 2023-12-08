import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const RouteHome = () => {
    return (
        <Stack.Navigator initialRouteName={'Home'}>
            <Stack.Screen name={"Home"} component={Home}/>
            <Stack.Screen name={"Details"} component={ReviewDetails}
                              options={({route}) => ({
                                  title: route.params.title,
                                  headerStyle: {
                                      backgroundColor: '#c3eae9',
                                  }
                              })}
            />
        </Stack.Navigator>
    );
};

export default RouteHome;
