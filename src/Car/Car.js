import React from 'react'
import './Car.css'

export default props => {
    const inputClasses = ['input']

    if (props.name !== '') {
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }

    return (
        <div className="Car">
            <h3>Car name: {props.name}</h3>
            <p>Year: {props.year}</p>
            <input
                type="text"
                onChange={props.onChangeName}
                value={props.name}
                className={inputClasses.join(' ')}
            />

            <p>Lot number: <strong style={{color: 'red'}}>{Math.round(Math.random() * 100)}</strong></p>
            <button onClick={props.onChangeTitle}>Click</button>
        </div>
    )
}
