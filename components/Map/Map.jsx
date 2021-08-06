import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectDestination, selectOrigin } from '../../slices/navSlice'
import {MapViewDirections} from 'react-native-maps-directions';
const Map = () => {
     const origin = useSelector(selectOrigin);
     const destination = useSelector(selectDestination);
    return (

        <MapView style={tw`flex-1`}
        mapType="mutedStandard"
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            {origin?.location && (
                <Marker 
                coordinate={{
                    latitude: origin.location.lat,
                    longitude: origin.location.lng
                }}
                title="Origin"
                description={origin.description}
                identifier="origin"/>
            )}
            <MapViewDirections/>
            </MapView>

    )
}

export default Map

const styles = StyleSheet.create({})