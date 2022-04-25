import { connect } from "react-redux";
import React from 'react';
import {GetForecastThunkCreator} from "../reducers/weather-reducer";
import WeatherCard from "./WeatherCard";

class MiddleWeatherComponent extends React.Component {
    state = {
        isLoading : true
    }

    async componentDidMount() {
        await this.props.GetForecastThunkCreator()
        this.setState((state) => {state.isLoading = false})
    }

    render(){

        if(this.state.isLoading){
            return(<div>LOADING</div>)
        }

        return( <WeatherCard {...this.props}/>)
    }
}

function mapStateToProps(state){
    return {weatherPage : state.weatherPage}
}

const WeatherContainer = connect(mapStateToProps, {GetForecastThunkCreator}) (MiddleWeatherComponent)

export default WeatherContainer;