import {StyleSheet} from 'react-native';
import Home from "./screens/home";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ReviewDetails from "./screens/reviewDetails";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
                <Stack.Navigator initialRouteName={'Home'}>
                    <Stack.Screen name={"Home"} component={Home}/>
                    <Stack.Screen name={"Details"} component={ReviewDetails}/>
                </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {},
});

