import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./componentsHome/index.js";
// import HomeScreen from "./componentsDoctors/index.js";
import Doctors from "./componentsDoctors/index.js";
import Authentication from "./components/Authentication.js";
import Enterdetail from "./components/EnterDetails.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EnterDetail" component={Enterdetail} />
        <Stack.Screen name="Doctors" component={Doctors} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
