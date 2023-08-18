import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div>
        <nav> 
        <div>
        <Link to='/'>KIRAN M V </Link>
        </div>

        <div>
         <Link to='/educationdetails'>Education</Link>
        </div>
        <div>
        <Link to='/contactdetails'>Contact</Link>
        </div>
        <div>
        <Link to='/skills'>Skills</Link>
        </div>
        <div>
        <Link to='/certification'>Certification</Link>
        </div>



       

        </nav>
     </div>
     );
}
 
export default Navbar;