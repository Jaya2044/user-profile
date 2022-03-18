import React from 'react'
import NavbarStyles from "../styles/Navbar.module.css";
function Navbar() {
  return (
    <div>
        <ul className={NavbarStyles.ul}>
            <li className={NavbarStyles.li}><a href="/">Home</a></li>
            <li className={NavbarStyles.li}><a href='/contact'>Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar