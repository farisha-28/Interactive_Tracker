import React, { useState } from "react";

function FormComponent() {
    const [inputValue, setInputValue] = useState('');
    const [age, setAge] = useState(0);
    const [counter, setCounter] = useState(0);
    const [selectedOption, setSelectedOption] = useState("fall 21");
    const [isChecked, setIsChecked] = useState(false);

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleChangeGender = (event) => {
        setIsChecked(event.target.checked);
    }

    const incrementAge = () => {
        setAge(age + 1);
    };

    const incrementCourse = () => {
        setCounter(counter + 1);
    };

    const decrementCourse = () => {
        setCounter(counter - 1);
    };

    const resetCourse = () => {
        setCounter(0);
    };

    return (
        
        <div>
            <label>Student Name: 
                <input type="text" value={inputValue} onChange={handleChange} style={{ marginTop: '5px' }} />
            </label><br />
            <label>Age: {age} <button onClick={incrementAge} style={{ marginTop: '5px' }}>Increment Age</button></label><br />
            <label>
                Select Session:
                <select value={selectedOption} onChange={handleDropdownChange} style={{ marginTop: '5px' }}>
                    <option value="fall 21">Fall 21</option>
                    <option value="spring 21">Spring 21</option>
                    <option value="fall 22">Fall 22</option>
                    <option value="spring 22">Spring 22</option>
                </select>
            </label><br />
    
            Counter: {counter} &nbsp;&nbsp; 
            <button className="counter-button" onClick={incrementCourse}> Increment </button>
            <button className="counter-button" onClick={decrementCourse}> Decrement </button>
            <button className="counter-button" onClick={resetCourse}> Reset </button>
        </div>
        
    );
}

export default FormComponent;
