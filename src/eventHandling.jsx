import React, { useState } from 'react';

function Event() {

    const [count, setCount] = useState(0);
    const max = 9;

    const eventStyles = {
        backgroundColor : "rgb(197, 121, 20)",
        color : "white",
        padding: "10px 20px",
        borderRadius: "10px",
        border : "none",
        cursor: "pointer",
        marginLeft: "10px", 
    }

    const handleClick = (name) => {
        if (count < max) {
            setCount(count + 1);
            console.log(`${name}, you enrolled to ${count + 1} course `);
        } else {
            console.log(`${name}, can't enroll to more than ${max} courses.`)
        }
    };

    return (
        <div>
            <button style={eventStyles} onClick={() => handleClick("Farisha")}>
                Enroll Course
            </button> &nbsp;
            {count < max ? `Enrolled to ${count} course` : `You can't enroll to more than ${max} courses.`}
        </div>
    );
}

export default Event;