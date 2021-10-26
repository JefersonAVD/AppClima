import React , {useContext,useEffect}from 'react'
import { View, Text, Picker } from 'react-native'
import { locationAquisition } from '../../Model/Axios-Req/requisition'
import { locationContext } from '../main/main'


export default function Location(props) {
    const {State,setState,City,setCity,States,setStates,Cities,setCities} = useContext(locationContext)
    
    useEffect(() => {
        if(props.city){
        }else{
        locationAquisition().then(async resp=>{ await setStates(resp.data);})
        }
    }, [])
    let vari = props.city ? Cities : States;
    return (
        <View>
            <Picker
                selectedValue={props.city? City : State }
                style={{ height: 50, width: 200 }}
                onValueChange={itemValue=>{
                    if(!props.city){
                    setCities([])
                    locationAquisition(itemValue).then(resp=>{setCities(resp.data)})
                    }else{
                        setCity(itemValue)
                        console.log(City)
                    }  
                }}
                >
                <Picker.Item label={`--Selecione ${!props.city? 'seu Estado--': 'sua Cidade--'}`}/>
                {
                vari.map((Location,index) =>{
                return !props.city ? <Picker.Item key={index} label={Location.nome} value={Location.sigla}/>:<Picker.Item key={index} label={Location.nome} value={Location.nome}/>
                }) }
            </Picker>
            
        </View>
    )    
}
/*<Picker
            selectedValue={callBackLocation().uniState}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue) =>{
                
                callBackLocation().setuniState(itemValue)
                if(!props.city){ 
                cityAquisition(itemValue).then(resp=>callBackLocation().setlistStates(resp.data))
            } return
            }}
            >
                <Picker.Item label={`--Selecione ${!props.city? 'seu Estado--': 'sua Cidade--'}`}/>
                { States.map((Location,index) =>{
                return !props.city ? <Picker.Item key={index} label={Location.nome} value={Location.sigla}/>:<Picker.Item key={index} label={Location.nome} value={Location.nome}/>
                }) }
            </Picker>*/