import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './style'
export default function Date(props){

    return (
        <View style={styles.Container}>
            <View style={styles.textGroup}>
                <Text style={styles.text}>Clima:</Text> 
                <Text style={styles.textBox}>{props.data.weather[0].description}</Text>
            </View >
            <View style={styles.textGroup}>
                <Text style={styles.text}>Temperatura:</Text> 
                <Text style={styles.textBox}>{props.data.main.temp}Cº</Text>
            </View>
            <View style={styles.subContainer}>
                <View style={styles.textGroup}>
                    <Text style={styles.text}>Máxima:</Text> 
                    <Text style={styles.textBox}>{props.data.main.temp_max}Cº</Text>
                </View>
                <View style={styles.textGroup}>
                    <Text style={styles.text}>Mínima:</Text> 
                    <Text style={styles.textBox}>{props.data.main.temp_min}Cº</Text>
                </View>
            </View>
        </View>
    )
}
