import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import store from "./app/store";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
			<SafeAreaProvider>
				<HomeScreen />
				</SafeAreaProvider>
				</NavigationContainer>
		</Provider>
	);
};

const styles = StyleSheet.create({});
export default App;
