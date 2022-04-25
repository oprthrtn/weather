import {Card, Row,Col, Image, ButtonGroup,ToggleButton} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import WeatherCardTopRow from './WeatherCardComponents/WeatherCardTopRow';
import WeatherCardBottomRow from './WeatherCardComponents/WeatherCardBottomRow';
import '../css/WeatherCard.scss';
import WeatherCardInputGroup from './WeatherCardComponents/WeatherCardInputGroup';
import WeatherCarouselDay from './WeatherCarouselHours';

function WeatherCard(props) {
    
    props = props.weatherPage;
    let current = props.current;
    let location = props.location;
    let forecastToday = props.forecast.forecastday[0];
    const [UnitOfMeasurement, setUnitOfMeasurement] = useState('C');
    const [highTempValue, setTopValue] = useState(forecastToday.day.maxtemp_c);
    const [minTempValue, setBottomValue] = useState(forecastToday.day.mintemp_c);
    let radios = {
        'C': current.temp_c,
        'F': current.temp_f
    };
    
      useEffect(() => {
        if(UnitOfMeasurement === 'C'){
            setTopValue(forecastToday.day.maxtemp_c)
            setBottomValue(forecastToday.day.mintemp_c)
        }
        else{
            setTopValue(forecastToday.day.maxtemp_f)
            setBottomValue(forecastToday.day.mintemp_f)
        }
      },[UnitOfMeasurement])

      useEffect(() => {
        if(UnitOfMeasurement === 'C'){
            setTopValue(forecastToday.day.maxtemp_c)
            setBottomValue(forecastToday.day.mintemp_c)
        }
        else{
            setTopValue(forecastToday.day.maxtemp_f)
            setBottomValue(forecastToday.day.mintemp_f)
        }
      },[props])

    let topRowData = [highTempValue, forecastToday.day.maxwind_kph, forecastToday.astro.sunrise]
    let bottomRowData = [minTempValue, forecastToday.day.maxwind_kph,
        {rain : forecastToday.day.daily_chance_of_rain, snow : forecastToday.day.daily_chance_of_snow}, forecastToday.astro.sunset]
    return(<div><Card className="p-3 bg-light mt-4 d-flex">
        <WeatherCardInputGroup props={location}/>

        <Card.Title className="d-inline-flex" as="h1">{location.name}, {location.country}</Card.Title>
        <Card.Subtitle className="d-inline-flex">{new Date(location.localtime).toLocaleString("ru")} </Card.Subtitle>
        <Card.Body className="mt-2">
            <Row>
                <Col className="mainCol d-flex align-items-start mt-4">
                    <Image className="weatherImg" src={current.condition.icon}></Image>
                    <div className="d-flex flex-column h-100 w-100 align-items-end">
                        <div className="d-flex justify-content-end align-items-center w-100">
                            <h2>{radios[UnitOfMeasurement]}°</h2>
                            <ButtonGroup className="d-flex flex-column ms-3">
                                {Object.keys(radios).map(key => (
                                  <ToggleButton
                                    className="rounded-circle border-0 d-flex"
                                    key={key}
                                    id={`radio-${key}`}
                                    type="radio"
                                    name="radio"
                                    value={key}
                                    variant = "outline-dark"
                                    checked={UnitOfMeasurement === key}
                                    onChange={(e) => setUnitOfMeasurement(e.currentTarget.value)}>
                                    
                                  {key}
                                 </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </div>
                        <small className="d-flex w-100 h-100 justify-content-end align-items-end">{current.condition.text}</small>
                    </div>
                </Col>
                <Col xl className="mt-4">
                    <WeatherCardTopRow props={topRowData}/>
                    <WeatherCardBottomRow props={bottomRowData}/>
                </Col>
            </Row>
            {/*<Row className="justify-content-center">
                <div className="d-flex mainCol">
                    <Image className="weatherImg" src={current.condition.icon}></Image>
                    <div className="d-flex flex-column align-items-end flex-grow-1">
                        <div className="d-flex align-items-center justify-content-around">
                            <h2>{radios[UnitOfMeasurement]}°</h2>  
                            <ButtonGroup className="d-flex flex-column ms-3">
                            {Object.keys(radios).map(key => (
                              <ToggleButton
                                className="rounded-circle border-0 d-flex mb-2"
                                key={key}
                                id={`radio-${key}`}
                                type="radio"
                                name="radio"
                                value={key}
                                variant = "outline-dark"
                                checked={UnitOfMeasurement === key}
                                onChange={(e) => setUnitOfMeasurement(e.currentTarget.value)}>
  
                              {key}
                             </ToggleButton>
                            ))}
                            </ButtonGroup>
                            
                        </div>
                        <h6 className="mt-auto ">{current.condition.text}</h6>
                    </div>
                </div>  
                <Col xl className="mt-4">
                    <WeatherCardTopRow props={topRowData}/>
                    <WeatherCardBottomRow props={bottomRowData}/>
                </Col>
            </Row>*/}
        </Card.Body>
    </Card>
    <WeatherCarouselDay {...forecastToday.hour}/>
    </div>)
    
    
}

export default WeatherCard;