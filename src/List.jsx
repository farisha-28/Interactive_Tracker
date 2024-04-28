// Rendering Lists


function List(){

    const courses = ["Algorithm", "Data Structure", "Software Development"];
    const listItems = courses.map(item => <li>item</li>);
    return (
        <ul>{listItems}</ul>
    );
}

export default List