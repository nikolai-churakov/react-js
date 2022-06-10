import './App.css';
import Car from "./Car/Car";

state = {
   cars: [
       {name: 'Ford', yaer: 2018},
       {name: 'Audi', yaer: 2016},
       {name: 'Mazda', yaer: 2010}
]
}

const cars = this.state.cars
const divStyle =  {
  'color': '#0088ff',
  'fontSize': '18px'
}

function App() {
  return (
    <div className="App">
        <div style={divStyle}>
            <h1 style={{fontSize: '30px', textAlign: 'center'}}>add to git</h1>

            <Car name={cars[0].name} year={cars[0].yaer}/>
            <Car name={cars[0].name} year={cars[0].yaer}/>
            <Car name={cars[0].name} year={cars[0].yaer}/>
        </div>
    </div>
  );
}

export default App;
