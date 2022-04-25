import {weatherApi} from '../api/weatherApi';

const GET_WEATHER = "GET_WEATHER"


let initialState = {
    location : {},
    current : {},
    forecast: {}
};


const weatherReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type){
        case GET_WEATHER:
            newState.location = action.location;
            newState.current = action.current;
            newState.forecast = action.forecast;
            return newState;
        default:
            return newState;
    }
}

export function GetForecastActionCreator(location, current, forecast){
    return {type: GET_WEATHER, location : location, current : current, forecast : forecast}
}



export function GetForecastThunkCreator(location = "Москва"){
    
    return(dispatch) => {
        weatherApi.GetForecast(location).then(response => {

            if(response.status === 200){
                
                response = response.data;
                dispatch(GetForecastActionCreator(response.location, response.current, response.forecast))
            }
            
        })
    }
}

export default weatherReducer;