import * as axios from 'axios';

const baseURL = 'http://api.weatherapi.com/v1/';

const instance = axios.create({
    baseURL : baseURL,
    headers: {
        "Content-Type": "application/json",
        "key": "b8c083df66ed434ba3d191914221603"
    },
});

async function GetForecast(q){
    const formData = new FormData();
    formData.append('q', q);
    formData.append('lang', 'ru');
    return await instance.post('forecast.json', formData)
    .then(response => {
        return response;
    })

}

export const weatherApi = {
    GetForecast : GetForecast
}
