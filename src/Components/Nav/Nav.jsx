import { NavLink } from 'react-router-dom'

// Components & Assets
import Logo from '../../assets/react-logo.png'
import Clock from './Clock'
import Wallet from './Wallet'

const Nav = ({ setDaytime }) => {
  return (
    <nav className="navigation-bar">
      <NavLink to="/" id='logo'>
        <img src={Logo} alt="react logo" />
      </NavLink>
      <NavLink to="/market">
        SUPER MARKET
      </NavLink>
      <NavLink to="/burgers">
        BURGER SHOP
      </NavLink>
      <Wallet />
      <Clock setDaytime={setDaytime} />
    </nav>
  )
}

export default Nav