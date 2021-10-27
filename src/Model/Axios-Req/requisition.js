import Axios from 'axios';
import{API_HEAD,API_KEY}from '@env'

export async function locationAquisition(param){
    const end = param ? param +'/municipios' : ''
    return await Axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+end)
}



export default async function wheatherAquisition (city){

    const options = {
        headers:{
            'x-rapidapi-host': API_HEAD,
            'x-rapidapi-key': API_KEY
        },
        params: {
            q: `${city},br`,
            lang: 'pt',
            units: 'metric',
        },
    }
    return await Axios.get('https://community-open-weather-map.p.rapidapi.com/weather',options)
}