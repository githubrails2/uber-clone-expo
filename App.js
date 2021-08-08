import React from "react";
import {  StyleSheet,KeyboardAvoidingView, Platform} from "react-native";
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
					<KeyboardAvoidingView
						style={{ flex: 1 }}
						behavior={Platform.OS === "ios" ? "padding" : "height"}
					keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}>
					<Stack.Navigator>
						<Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false, }} />
						<Stack.Screen name="MapScreen" component={MapScreen} options={{headerShown: false,}} />
					</Stack.Navigator>
					</KeyboardAvoidingView>
				</SafeAreaProvider>
			</NavigationContainer>
		</Provider>
	);
};


export default App;
