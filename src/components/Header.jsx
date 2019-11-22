import React from 'react'
import { NavLink } from 'react-router-dom'
import MobileNav1 from '../assests/HomeMobile.png'
import MobileNav2 from '../assests/CoinMobile.png'
import MobileNav3 from '../assests/QuestionMobile.png'

function Header() {
  return (
    <div className = "Header">
    <h1>Country Collection</h1>
    
    <nav>
      <NavLink exact to='/'><img className="MobileNav1" src={MobileNav1} alt="Home" /></NavLink>

      <NavLink exact to='/Currency'><img className="MobileNav2" src={MobileNav2} alt="" /></NavLink>
      
      <NavLink exact to='/Suggestions'>
        <img className="MobileNav3" src={MobileNav3} alt="" />
      </NavLink>
    </nav>
    </div>
  )

}

export default Header;