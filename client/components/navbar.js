import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({handleClick}) => (
  <div>
    <h1>DylanHrebenach.com</h1>
    <nav>
      <div>
        <Link to="/home">Home</Link>
        <a href="#" onClick={handleClick}>
          Logout
        </a>
      </div>
    </nav>
    <hr />
  </div>
)

export default Navbar
