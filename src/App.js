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
        pageTitle: 'React components'
    }

changeTitleHandler = () => {

        let oldTitle = this.state.pageTitle
        const newTitle = oldTitle + ' (changed) '
    this.setState({
        pageTitle: newTitle
    })
}

render() {

    const cars = this.state.cars

    return (
    <div className="App">
        <div style={divStyle}>
            <h1 style={{fontSize: '30px', textAlign: 'center'}}>{this.state.pageTitle}</h1>

            <button onClick={this.changeTitleHandler}>Change title</button>

            <Car name={cars[0].name}
                 year={cars[0].year}/>
                onChangeTitle={this.changeTitleHandler}
            <Car name={cars[1].name}
                 year={cars[1].year}/>
            <Car name={cars[2].name}
                 year={cars[2].year}/>
        </div>
    </div>
  );
}
}
export default App;