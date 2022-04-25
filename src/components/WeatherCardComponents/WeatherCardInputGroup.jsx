import {Form, FormControl, Button, InputGroup} from 'react-bootstrap';
import { FaSearch} from 'react-icons/fa';
import {useState } from 'react';
import { useDispatch } from 'react-redux';
import { GetForecastThunkCreator } from '../../reducers/weather-reducer';
function WeatherCardInputGroup(props) {
    let location = props.props
    const [locValue, setLocValue] = useState(`${location.name}, ${location.country}`);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        dispatch(GetForecastThunkCreator(locValue));
        event.preventDefault();
        event.stopPropagation();
    }

    
    return(
        <Form size="lg" onSubmit={handleSubmit}>
            <InputGroup>
                <FormControl required placeholder={`${location.name}, ${location.country}`} onChange={e => {setLocValue(e.target.value)}}/>
                <Button type="subimt" variant="outline-secondary" id="searchBtn" className="d-flex align-items-center">
                    <FaSearch/>
                </Button>
            </InputGroup>
        </Form>)
}

export default WeatherCardInputGroup;