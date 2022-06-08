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

export default () => (
    <div>
       <p>This is car component</p>
        <p>
            <strong style={{color:'red'}}>
                {Math.round(Math.random()*100)}</strong>
        </p>
    </div>
)
