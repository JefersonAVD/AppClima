import React , {useState , createContext, useEffect} from 'react'
import { View, Button } from 'react-native'
import Location from '../Location'
import Aquisition  from '../../Model/Axios-Req/requisition';

export const locationContext = createContext();

export default function main(props) {

    const [States , setStates] = useState([]);
    const [State, setState] = useState();

    const [Cities, setCities] = useState([]);
    const [City, setCity] = useState();

    const Elements = {State,setState,City,setCity,States,setStates,Cities,setCities}
    return (
        <View>
            <locationContext.Provider value = {Elements}>
                <View>
                    <Location/>
                    <Location city={true}/>
                </View>
                <Button
                    title='Descubra o clima'
                    onPress={()=>{
                        if(City){
                    Aquisition(City).then(resp=>{
                        console.log(resp.data);
                        props.pickData(resp.data)}
                        )
                        .catch(error=>{alert('Não conseguimos encontrar a sua cidade, procure por outra e desculpe o transtorno')})
                    
                    }else{
                            alert('Você não selecionou a cidade!')
                        }
                    }}
                />
            </locationContext.Provider>
        </View>
    )
}
