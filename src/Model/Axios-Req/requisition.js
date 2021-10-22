import Axios from 'axios';


export async function stateAquisition(){

   return await Axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
}

export async function cityAquisition(param){

    return await Axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${param}/municipios`)
}



export default async function wheatherAquisition (state){

    const options = {
        headers:{
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': '5a19841a31msh1ca72b19d44d44dp10f494jsne47744f12d0c'
        },
        params: {
            q: `${state},br`,
            lang: 'pt',
            units: 'metric',
        },
    }
    return await Axios.get('https://community-open-weather-map.p.rapidapi.com/weather',options)
}