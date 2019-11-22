import React from "react"
import {NavLink }from 'react-router-dom'

function Footer() {
    return (
    <div>
    
         <nav>
      <NavLink exact to='/'> Home </NavLink>

      <NavLink exact to='/Currency'>Currency</NavLink>
      
      <NavLink exact to='/Suggestions'>
        Suggestions
      </NavLink>
    </nav>
    </div>

    )

}

export default Footer;
