import './App.css';
import { Map } from './components/Map'
import { Click } from './mapInteractions/Click'

const handleMapClick = (e: any) => {
  console.log('clicked', e)
}

function App() {  
  return (
    <div className="App">
      <Map>
        <Click onClick={handleMapClick} />
      </Map>
    </div>
  );
}

export default App;
