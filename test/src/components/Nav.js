import './Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="topNav">
      <img src={require("./navLogo.png")} className="navLogo"/>
      <ul className="navList">
        <li className="navItem"><Link to="/" className="navLink">Home</Link></li>
        <li className="navItem"><Link to="/" className="navLink">About</Link></li>
        <li className="navItem"><Link to="/" className="navLink">Menu</Link></li>
        <li className="navItem"><Link to="/booking" className="navLink">Reservations</Link></li>
        <li className="navItem"><Link to="/" className="navLink">Order Online</Link></li>
        <li className="navItem"><Link to="/" className="navLink">Login</Link></li>
      </ul>
    </nav>
  )
}

export default Nav