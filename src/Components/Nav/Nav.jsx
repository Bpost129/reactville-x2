import { NavLink } from 'react-router-dom'

// Components & Assets
import Logo from '../../assets/react-logo.png'
import Clock from './Clock'

const Nav = () => {
  return (
    <nav className="navigation-bar">
      <NavLink to="/" id='logo'>
        <img src={Logo} alt="react logo" />
      </NavLink>
      <NavLink to="/burgers">
        BURGER SHOP
      </NavLink>
      <Clock />
    </nav>
  )
}

export default Nav