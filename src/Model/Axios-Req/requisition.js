import Axios from 'axios';

export async function locationAquisition(param){
    const end = param ? param +'/municipios' : ''
    return await Axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+end)
}



export default async function wheatherAquisition (city){

    const options = {
        headers:{
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': '5a19841a31msh1ca72b19d44d44dp10f494jsne47744f12d0c'
        },
        params: {
            q: `${city},br`,
            lang: 'pt',
            units: 'metric',
        },
    }
    return await Axios.get('https://community-open-weather-map.p.rapidapi.com/weather',options)
}