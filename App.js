import {NavigationContainer} from "@react-navigation/native";
import 'react-native-gesture-handler';
import {createDrawerNavigator} from "@react-navigation/drawer";
import RouteHome from "./routes/home";
import RouteAbout from "./routes/about";

const Drawer = createDrawerNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="HomeStack" component={RouteHome} />
                <Drawer.Screen name="AboutStack" component={RouteAbout} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}


