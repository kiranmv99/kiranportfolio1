import { Link } from "react-router-dom";
import Kiran from './Kiran.png.jpg';
const Home = () => {
    return ( 
        <div className="home">
            <div>
            <h1>Hello, my self Kiran</h1>
           <h1>I'm a certified fullstack developer</h1>
            <h1> & I'm looking for an oppurtunity to grow my carrier in fullstack developement.</h1>     
            </div>

            <div>
               
               <img src={Kiran} alt="" />
            </div>
                
          
        </div>
     );
}
 
export default Home;