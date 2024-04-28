import welcomePic from './assets/salam.jpg'

function Card(){
    return(
        <div className="card">
            
            <h2 className="card-title">React Code</h2>
            {/* <img src="https://via.placeholder.com/150" alt="profile picture"></img> */}
            <img className="card-image" src={welcomePic} alt="profile picture"></img> 
            <p className="card-text">Hey welcome to my coding site</p>
        </div>
    );
}
export default Card