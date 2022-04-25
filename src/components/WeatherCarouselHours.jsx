import { FiCloudRain,FiCloudSnow } from 'react-icons/fi';
import { RiCelsiusFill, RiFahrenheitFill, RiWindyFill} from 'react-icons/ri';
import {Row,Col, Card} from 'react-bootstrap';
import Slider from 'react-slick';

function WeatherCarouselHours(props) {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              arrows : false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows : false,
              dots: false
            }
          }
        ]
    };
    
    Object.keys(props).map(hour => {
      if(props[hour].chance_of_rain >= props[hour].chance_of_snow){
        props[hour]['precipitation'] = props[hour].chance_of_rain;
        props[hour]['precipitationIcon'] = <FiCloudRain className="h2 text-muted ms-2"/>
      }
      else{
        props[hour]['precipitation'] = props[hour].chance_of_snow;
        props[hour]['precipitationIcon'] = <FiCloudSnow className="h2 text-muted ms-2"/>
      }
    });
    return(
        <Slider {...settings} className="mt-4">
            {Object.keys(props).map(hour => (
                <Card style={{ width: '18rem' }} as ="div" className="d-flex align-items-center" key={hour}>
                    <Card.Img variant="top" src={props[hour].condition.icon} className="w-25 mt-3"/>
                    <Card.Body className="w-100">
                        <Card.Title>{props[hour].time.slice(-5, props[hour].time.length)}</Card.Title>
                        <Row className="mt-3 align-items-center">
                            <Col>
                                <div className="d-flex justify-content-center align-items-center">
                                    <h4>{props[hour].temp_c}</h4>
                                    <RiCelsiusFill className="h3 text-muted ms-2"/>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <h4>{props[hour].temp_f}</h4>
                                    <RiFahrenheitFill className="h3 text-muted ms-2"/>
                                </div>
                            </Col>
                            
                            <Col>
                                <div className="d-flex justify-content-center align-items-center">
                                    <h4>{(props[hour].wind_kph* 5/18).toFixed(1)}</h4>
                                    <RiWindyFill className="h2 text-muted ms-2"/>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <h4>{props[hour].precipitation}%</h4>
                                    {props[hour].precipitationIcon}
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>))}
        </Slider>)
}

export default WeatherCarouselHours;