import '../styles/Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <header>
      <Link to='/' className='navbar-text'>Home</Link>
      <h2 className='navbar-text'> | </h2>
      <Link to='/favoritos' className='navbar-text'>Favoritos</Link>
    </header>
   );
}
 
export default Navbar;