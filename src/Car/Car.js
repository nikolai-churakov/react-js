import React from "react";

// function car() {
//     return (
//     <h2>Hello! (car component)</h2>
// )}

// const car = () => {
//     return (
//         <div>Hello!</div>
//     )
// }

// const car = () => (
//     <div>
//         <strong>Hello!</strong>
//     </div>
// )

// export default car

export default props => (
    <div>
       <h3>Car name: {props.name}</h3>
        <p>Year: {props.year}</p>
        <p>Lot number: <strong style={{color:'red'}}>{Math.round(Math.random()*100)}</strong></p>
    </div>
)
