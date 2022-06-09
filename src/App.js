import './App.css';
import Car from "./Car/Car";

const divStyle =  {
  'color': '#0088ff',
  'fontSize': '18px'
}

function App() {
  return (
    <div className="App">
        <div style={divStyle}>
            <h1 style={{fontSize: '30px', textAlign: 'center'}}>add to git</h1>
            <Car name={'Ford'} year={2018}
                <p style={{color: 'green'}}>COLOR</p>
            </Car>
            <Car name={'Audi'} year={2015}>
               <p style={{color: 'red'}}>COLOR</p>
            </Car>
            <Car name={'Mazda'} year={2022}/>
        </div>
    </div>
  );
}

export default App;
