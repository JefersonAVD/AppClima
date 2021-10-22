import React from 'react'
import { View, Text, Picker } from 'react-native'
import { cityAquisition } from '../../Model/Axios-Req/requisition'

export default function Location(props) {
    
   

    
    return (
        <View>
            <Picker
            selectedValue={props.value}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue) =>{
                console.log(itemValue)
                props.setValue(itemValue)
                if(!props.city){ 
                cityAquisition(itemValue).then(resp=>props.setNextValue(resp.data))
            } return
            }}
            >
                <Picker.Item label={`--Selecione ${props.city? 'seu Estado--': 'sua Cidade--'}`}/>
                { props.estados.map((Location,index) =>{
                return !props.city ? <Picker.Item key={index} label={Location.nome} value={Location.sigla}/>:<Picker.Item key={index} label={Location.nome} value={Location.nome}/>
                }) }
            </Picker>
        </View>
    )
}

        /*<View>
            <Picker
            selectedValue={props.value}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue) =>{ 
                props.setValue(itemValue)
                cityAquisition(itemValue).then(resp=>props.setNextValue(resp.data))
            }}
            >
                <Picker.Item label='--Selecione seu estado--'/>
                { props.estados.map((state,index) =>{
                return <Picker.Item key={index} label={state.nome} value={state.sigla}/>
                }) }
            </Picker>
        </View>*/