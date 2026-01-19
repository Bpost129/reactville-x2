import { NavLink } from 'react-router-dom'

// Components & Assets
import Logo from '../../assets/react-logo.png'
import Clock from './Clock'
import Wallet from './Wallet'

const Nav = ({ setDaytime, cash }) => {
  return (
    <nav className="navigation-bar">
      <NavLink to="/" id='logo'>
        <img src={Logo} alt="react logo" />
      </NavLink>
      <NavLink to="/postoffice">
        POST OFFICE
      </NavLink>
      <NavLink to="/market">
        SUPER MARKET
      </NavLink>
      <NavLink to="/burgers">
        BURGER SHOP
      </NavLink>
      <Wallet cash={cash} />
      <Clock setDaytime={setDaytime} />
    </nav>
  )
}

export default Nav