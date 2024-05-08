// //  useState, useEffect, useContext, useReducer, useCallback,.......
// // useState() --> It's a react hook that allows the creation of a stateful variable
//                 //and a setter function to update it's value in the virtual DOM
//                 // [name, setName]

// import React, { useState } from 'react';

// function UseStateHook() {                // function name always should start with capital letter.
//     const [name, setName] = useState("");
//     const [age, setAge] = useState(0);

//     const updateName = () => {
//         setName("Sharmina");
//     };

//     const incrementAge = () => {
//         setAge(age + 1);
//     };

//     return (
//         <div>
//             <p>Student Name: {name}</p>
//             <button onClick={updateName}>Set Name</button>

//             <p>Age: {age}</p>
//             <button onClick={incrementAge}>Increment Age</button>
//         </div>
//     );
// }

// export default UseStateHook;