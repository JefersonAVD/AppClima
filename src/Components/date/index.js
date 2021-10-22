import React from 'react'
import { View, Text } from 'react-native'

export default function Date(props){

    return (
        <View>
            <Text>Clima: {props.data.weather[0].description}</Text>
            <Text>Temperatura: {props.data.main.temp}Cº</Text>
            <Text>Máxima: {props.data.main.temp_max}Cº</Text>
            <Text>Mínima: {props.data.main.temp_min}Cº</Text>
        </View>
    )
}
