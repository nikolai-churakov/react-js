import './App.css';
import Car from "./Car/Car";
import {Component} from "react";

state = {
   cars: [
       {name: 'Ford', year: 2018},
       {name: 'Audi', year: 2016},
       {name: 'Mazda', year: 2010}
]};

const cars = this.state.cars

class App extends Component {
    render() {
        const divStyle = {
            textAlign: 'center'
        }

        return (
            <div className="App">
                <div style={divStyle}>
                    <h1 style={{fontSize: '30px', textAlign: 'center'}}>add to git</h1>

                    <Car name={cars[0].name} year={cars[0].year}/>
                    <Car name={cars[1].name} year={cars[1].year}/>
                    <Car name={cars[2].name} year={cars[2].year}/>
                </div>
            </div>
        );
    }
}
// function App() {
//   return (
//     <div className="App">
//         <div style={divStyle}>
//             <h1 style={{fontSize: '30px', textAlign: 'center'}}>add to git</h1>
//
//             <Car name={cars[0].name} year={cars[0].year}/>
//             <Car name={cars[1].name} year={cars[1].year}/>
//             <Car name={cars[2].name} year={cars[2].year}/>
//         </div>
//     </div>
//   );
// }

export default App;
