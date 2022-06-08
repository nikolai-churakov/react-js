import './App.css';
import Car from "./Car/Car";

const divStyle =  {
  'color': '#0088ff',
  'fontSize': '62px'
}

function App() {
  return (
    <div className="App">
        <div style={divStyle}>
            <h1 style={{fontSize: '30px', textAlign: 'center'}}>add to git</h1>
            <Car />
        </div>
    </div>
  );
}

export default App;
