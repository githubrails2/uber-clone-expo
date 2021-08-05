import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import store from "./app/store";
import { Provider } from "react-redux";
import { HomeScreen, MapScreen } from "./screens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const App = () => {
	const Stack = createNativeStackNavigator();
	return (
		<Provider store={store}>
			<NavigationContainer>
				<SafeAreaProvider>
					<Stack.Navigator>
						<Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false, }} />
						<Stack.Screen name="MapScreen" component={MapScreen} options={{headerShown: false,}} />
					</Stack.Navigator>
				</SafeAreaProvider>
			</NavigationContainer>
		</Provider>
	);
};

const styles = StyleSheet.create({});
export default App;
