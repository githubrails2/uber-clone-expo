import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Map } from '../components'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {NavigateCard,RideOptionsCard} from '../components'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core'
const MapScreen = () => {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity style={tw`absolute bg-gray-100 top-16 left-8 z-50 p-3 rounded-full shadow-lg`} onPress={()=>navigation.navigate('HomeScreen')}>
                <Icon name="menu" />
            </TouchableOpacity>
            <View style={tw`h-1/2`}>
                <Map />
            </View>
            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen 
                    name="NavigateCard"
                    component={NavigateCard}
                    options={{
                        headerShown: false
                    }}
                    />
                    <Stack.Screen
                    name="RideOptionsCard"
                    component={RideOptionsCard}
                    options={{
                        headerShown: false
                    }}
                    />

                    
                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
