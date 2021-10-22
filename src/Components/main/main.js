import React , {useState} from 'react'
import { View, Text, Button } from 'react-native'
import State from '../States'
import Aquisition ,{stateAquisition} from '../../Model/Axios-Req/requisition';

export default function main(props) {

    const [Listaestados , setListaEstados] = useState([])
    const [estado, setEstado] = useState();

    const [selectedCity, setSelectedCity] = useState();
    const [Cities, setCities] = useState([]);

    stateAquisition().then(resp=>{setListaEstados(resp.data)})

    return (
        <View>
            <State
                value={estado}
                setValue={setEstado}
                setNextValue={setCities}
                estados={Listaestados}
            />
            <State
                city = {true}
                value={selectedCity}
                setValue={setSelectedCity}
                setNextValue={setCities}
                estados={Cities}
            />
            <Button
                title='Descubra o clima'
                onPress={()=>{
                Aquisition(selectedCity).then(resp=>{
                    console.log(resp.data);
                    props.pickData(resp.data)}
                    )}}
            />
        </View>
    )
}
