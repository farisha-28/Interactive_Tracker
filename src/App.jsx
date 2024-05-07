import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Batch from './Batch.jsx';
import Card from './Card.jsx';
import Button from './Button/Button.jsx';
import Inline from './ButtonInline.jsx';
import Student from './Student.jsx';
import UserGreeting from './GreetingUser.jsx';
import List from './List.jsx';
import Event from './eventHandling.jsx';

// adding css technique-- external, modules, inline
function App(){
  return(
    <>
       <Header/> 
       <UserGreeting isLoggedIn={true} age={7} userName="Farisha"/>
       <Batch/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/><br></br>
       <Button/>&nbsp;&nbsp;&nbsp;
       <Inline/><br></br>
       <List/>
       <p className='para'> <b>Infromation About Students:</b></p>
       <Student name="Farisha Hussain" age={24} semester="8th" isStudent={false}/>
       <Student name="Amyra Ismaiel" age={7} semester="Senior kg" isStudent={true}/>
       <Student name="Maya" age={8} semester="Senior kg" isStudent={true}/>
       <Event/>
       <Footer/>
       
    </>
   

  );
}
export default App