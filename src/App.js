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
            <Car name={'Ford'} year={2018}/>
            <Car name={'Audi'} year={2015}/>
        </div>
    </div>
  );
}

export default App;
