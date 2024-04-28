import Header from './Header.jsx';
import Footer from './footer.jsx';
import Batch from './Batch.jsx';
import Card from './Card.jsx';
import Button from './Button/Button.jsx';
import Button2 from './Button2.jsx';
import Student from './Student.jsx';

// adding css technique-- external, modules, inline
function App(){
  return(
    <>
       <Header/> 
       <Batch/>
       <Footer/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/><br></br>
       <Button/><br></br>
       <Button2/>
       <p> <b>Infromation of Student 1:</b></p>
       <Student name="Farisha Hussain" age={24} semes="8th" isStudent={false}/>
    </>
   

  );
}
export default App