import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'


const MapScreen = ({ navigation }) => {
    
    return (
        <View>
            <Text>Map Functionality</Text>
            <View style={tw`h-1/2`}>
                <Map/>
            </View>
            <View style={tw`h-1/2`}></View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
