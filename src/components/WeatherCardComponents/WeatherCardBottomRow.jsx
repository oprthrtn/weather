import { FaTemperatureLow} from 'react-icons/fa';
import { FiSunset } from 'react-icons/fi';
import { FiCloudRain, FiCloudSnow } from 'react-icons/fi';
import {Row,Col} from 'react-bootstrap';

function WeatherCardBottomRow(props) {
    let bottomRowData = props.props
    let precipitation;
    let precipitationIcon;

    if(bottomRowData[2]['rain'] >= bottomRowData[2]['snow']){
        precipitation = bottomRowData[2]['rain'];
        precipitationIcon = <FiCloudRain className="h2 text-muted "/>
    }
    else{
        precipitation = bottomRowData[2]['snow'];
        precipitationIcon = <FiCloudSnow className="h2 text-muted"/>;
    }
    return(
        <Row className="mt-4">
            <Col>
                <h2>{bottomRowData[0]}°</h2>
                <FaTemperatureLow className="h2 text-primary"/>
            </Col>
            <Col>
                <h2>{precipitation}%</h2>
                {precipitationIcon}
            </Col>
            <Col>
                <h2>{bottomRowData[3]}</h2>
                <FiSunset className="h2 text-muted"/>
            </Col>
        </Row>)
}

export default WeatherCardBottomRow;