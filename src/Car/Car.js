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
const style = {
    border: '1px solid #ccc',
    marginBottom: '10px',
    display: 'block',
    padding: '10px',
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
    borderRadius: '5px',
    'hover': {
        border: '1px solid #aaa',
        boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
        cursor: 'pointer'
    }
}
export default props => (
    <div  style={style}>
       <h3>Car name: {props.name}</h3>
        <p>Year: {props.year}</p>
        <p>Lot number: <strong style={{color:'red'}}>{Math.round(Math.random()*100)}</strong></p>
        <button onClick={props.onChangeTitle}>Click</button>
    </div>
)
