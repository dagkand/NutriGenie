import { Link } from 'react-router-dom';
import '../App.css';
import Logo from './media/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
        <img src={Logo} alt="Logo" className="logo" /> {/* Insert the logo */}
        <ul className="navbar-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/macros">Macros</Link></li>
            <li><Link to="/positive">Why and How?</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </nav>
  );
}

export default Navbar;