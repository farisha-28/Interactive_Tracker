// Rendering Lists

function List() {
    const courses = [
        { name: "Algorithm", credit: 3.00 },
        { name: "Data Structure", credit: 2.24 },
        { name: "Compiler", credit: 3 },
        { name: "Software", credit: 2 }
    ];

    // courses.sort((a, b) => a.name.localeCompare(b.name));  //alphabetical
    // courses.sort((a, b) => b.name.localeCompare(a.name));  // reverse alphabetical
    // courses.sort((a, b) => a.credit - b.credit);  // numeric
    // courses.sort((a, b) => b.credit - a.credit);  // reverse numeric

    const lowCreditCourses = courses.filter(course => course.credit < 3);
    const listItems = lowCreditCourses.map(lowCreditCourse => (
        <li key={lowCreditCourse.credit}>
            {lowCreditCourse.name}: &nbsp;
            <b>{lowCreditCourse.credit}</b>
        </li>
    ));

    return (
        <ol>{listItems}</ol>
    );
}

export default List;