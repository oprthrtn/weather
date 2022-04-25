import { FiSunrise } from 'react-icons/fi';
import { FaTemperatureHigh} from 'react-icons/fa';
import { RiWindyFill} from 'react-icons/ri';
import {Row,Col} from 'react-bootstrap';

function WeatherCardTopRow(props) {
    
    let topRowData = props.props
    return(
            <Row>
                <Col>
                    <h2>{topRowData[0]}°</h2>
                    <FaTemperatureHigh className="h2 text-danger"/>
                </Col>
                <Col>
                    <h2>{(topRowData[1] * 5/18).toFixed(1)} м/c</h2>
                    <RiWindyFill className="h2 text-muted"/>
                </Col>
                <Col>
                    <h2>{topRowData[2]}</h2>
                    <FiSunrise className="h2 text-muted"/>
                </Col>
            </Row>)
}

export default WeatherCardTopRow;