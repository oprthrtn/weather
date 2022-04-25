import './css/App.css';

import {Container} from 'react-bootstrap';
import WeatherContainer from './components/WeatherContainer';

function App() {
  return (
    <div className="App d-flex flex-column flex-grow-1 bg-dark">
      <Container className="flex-grow-1">
        <WeatherContainer/>
      </Container>
    </div>
  );
}

export default App;
