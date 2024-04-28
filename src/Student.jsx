function Student(props){
    return(

        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Semester: {props.semester}</p>
            <p>Student: {props.isStudent? "Yes":"Ex-Student"}</p>
        </div>

    );
}

export default Student