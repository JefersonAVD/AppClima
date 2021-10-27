import React , {useContext,useEffect,useState}from 'react'
import { View, Picker } from 'react-native'
import { locationAquisition } from '../../Model/Axios-Req/requisition'
import { locationContext } from '../main/main'
import {styles} from './style'


export default function Location(props) {
    const {State,setState,City,setCity,States,setStates,Cities,setCities} = useContext(locationContext)
    
    useEffect(() => {
            locationAquisition().then(resp=>{setStates(resp.data)})
    }, [])
    let vari = props.city ? Cities : States;
    

    return (
        <View style={styles.Container}>
            <Picker
                selectedValue={props.city ? City : State }
                style={{...styles.picker, height: 65, width:360 }}
                onValueChange={itemValue=>{
                    if(!props.city){
                        setState(itemValue)
                        setCities([])
                        locationAquisition(itemValue)
                        .then(resp=>{setCities(resp.data)})
                    }else{
                        setCity(itemValue)
                        console.log(City)
                    }  
                }}
                >
                <Picker.Item label={`-- Selecione ${!props.city? 'seu Estado --': 'sua Cidade --'}`}/>
                {
                vari.map((Location,index) =>{
                    return !props.city ? <Picker.Item key={index} label={Location.nome} value={Location.sigla}/>:<Picker.Item key={index} label={Location.nome} value={Location.nome}/>
                    }) }
            </Picker>
            
        </View>
    )    
}