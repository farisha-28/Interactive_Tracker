import Header from './Header.jsx';
import Footer from './footer.jsx';
import Batch from './Batch.jsx';
import Card from './Card.jsx';
import Button from './Button/Button.jsx';
import Inline from './ButtonInline.jsx';
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
       <Button/>&nbsp;&nbsp;&nbsp;
       <Inline/>
       <p> <b>Infromation of Student 1:</b></p>
       <Student name="Farisha Hussain" age={24} semester="8th" isStudent={false}/>
    </>
   

  );
}
export default App