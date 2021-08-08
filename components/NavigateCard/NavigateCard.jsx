import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import {GOOGLE_MAPS_APIKEY} from '@env';

import { useDispatch } from 'react-redux'
import { setDestination } from '../../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavFavorites from '../NavFavorites/NavFavorites'
import { Icon } from 'react-native-elements/dist/icons/Icon'
const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
       <SafeAreaView style={tw`bg-white flex-1`}>
           <Text style={tw`text-center py-5 text-xl`}>Good Morning Stuff</Text>
           <View style={tw`border-t border-gray-200 flex-shrink`}>
               <View>
               <GooglePlacesAutocomplete
                placeholder="Where to?"
                styles={toInputBoxStyles}
                nearbyPlacesAPI="GooglePlacesSearch"
                enablePoweredByContainer={false}
                fetchDetails={true}
                debounce={400}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en'
                }}
                returnKeyType={"search"}
                onPress={(data,details=null)=> {
                    dispatch(setDestination({
                        location: details.geometry.location,
                        description: data.description

                    })) 
                    navigation.navigate('RideOptionsCard')       
                }}
               />
                </View>
                <NavFavorites/>
            </View>
            <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
                <TouchableOpacity style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
                onPress={()=>navigation.navigate('RideOptionsCard')}>
                    <Icon
                        name="car"
                        type="font-awesome"
                        color="white"
                        size={16}
                    />
                    <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>navigation.navigate('EatsScreen')}style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
                    <Icon
                        name="fast-food-outline"
                        type="ionicon"
                        color="black"
                        size={16}
                    />
                    <Text style={tw`text-center`}>Eats</Text>
                </TouchableOpacity>
            </View>
       </SafeAreaView>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: "#00CCDF",
        borderRadius: 0,
        fontSize: 10
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})
