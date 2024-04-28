import PropTypes from 'prop-types'
function Student(props){
    return(

        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Semester: {props.semester}</p>
            <p>Student: {props.isStudent? "Yes":"Ex-Student"}</p>
        </div>

    );
}
// proptypes good for debugging
Student.prototype= {
    name: PropTypes.string,
    age: PropTypes.number,
    semester: PropTypes.string,
    isStudent: PropTypes.bool,
}
export default Student