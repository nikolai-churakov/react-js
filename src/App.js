import './App.css';
import Car from "./Car/Car";
import React, { Component } from 'react';

const divStyle =  {
  'color': '#0088ff',
  'fontSize': '18px'
}

class App extends Component {

    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2016},
            {name: 'Mazda', year: 2010}
        ],
        pageTitle: 'React components',
        showCars: false
    }

changeTitleHandler = (newTitle) => {
    this.setState({
        pageTitle: newTitle
    })
}

// handleInput = (event) => {
//     this.setState({
//         pageTitle: event.target.value
//     })
// }

    toggleCarsHandler =() => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

render() {
    // const cars = this.state.cars
    return (
    <div className="App">
        <div style={divStyle}>
            <h1 style={{fontSize: '30px', textAlign: 'center'}}>{this.state.pageTitle}</h1>

            {/*<input type="text" onChange={this.handleInput}/>*/}
            <button
                onClick={this.toggleCarsHandler}
                >Toggle cars</button>

            {   this.state.showCars
                ? this.state.cars.map((car, index) => {
                return (
                    <Car
                        key={index}
                        name={car.name}
                        year={car.year}
                        onChangeTitle={() => this.changeTitleHandler(car.name)}
                    />
                )
                })
                : null
            }

            {/*<Car*/}
            {/*    name={cars[0].name}*/}
            {/*    year={cars[0].year}*/}
            {/*    onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}*/}
            {/*/>*/}

            {/*<Car*/}
            {/*    name={cars[1].name}*/}
            {/*    year={cars[1].year}*/}
            {/*    onChangeTitle={ () => this.changeTitleHandler(cars[1].name)}*/}
            {/*/>*/}
            {/*<Car*/}
            {/*    name={cars[2].name}*/}
            {/*    year={cars[2].year}*/}
            {/*    onChangeTitle={ () => this.changeTitleHandler(cars[2].name)}*/}
            {/*/>*/}
        </div>
    </div>
  );
}
}
export default App;