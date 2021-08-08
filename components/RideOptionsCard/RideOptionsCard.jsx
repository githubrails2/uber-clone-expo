import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import {Icon} from 'react-native-elements'
import { useSelector } from 'react-redux'
import { selectTimeTravelInfo } from '../../slices/navSlice'
import 'intl';
const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTimeTravelInfo);
    const surge_Charge_Rate = 1.5;
    const data = [
        {
            id: "Uber-X-123",
            title: "Uber X",
            multipler: 1,
            image: "https://links.papareact.com/3pm"
        },
        {
            id: "Uber-XL-456",
            title: "Uber XL",
            multipler: 1.2,
            image: "https://links.papareact.com/5w8"
        },
        {
            id: "Uber-LUXX-789",
            title: "Uber LUX",
            multipler: 1.75,
            image: "https://links.papareact.com/7pf"
        }
    ]
   
    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity style={tw`absolute top-3 left-5 p-3 rounded-full`} onPress={()=>navigation.navigate("NavigateCard")}>
                    <Icon name="chevron-left" type="font-awesome"/>
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance.text}</Text>
            </View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item: {id, title, multplier, image },item }) => (
                    <TouchableOpacity
                        style={tw`flex-row items-center justify-between px-10 ${id=== selected?.id && "bg-gray-200"}`}
                        onPress={() => setSelected(item)}>
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: "contain"
                            }}
                            source={{uri: image}}
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`font-semibold text-xl`}>{title}</Text>
                            <Text>{travelTimeInformation?.duration.text} Travel Time (approx.)</Text>
                            
                        </View>
                        <Text style={tw`text-xl`}>{new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD'
                        }).format(travelTimeInformation?.duration.value*surge_Charge_Rate*multplier)/100}</Text>
                        
                    </TouchableOpacity>

                )}
            />
            <View style={tw`mt-auto border-t border-red-200`}>
                <TouchableOpacity
                    disabled={!selected}
                    style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
                    <Text style={`tw text-center text-white text-xl`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
