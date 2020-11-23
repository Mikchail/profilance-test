import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Main Page</Link></li>
          <li><Link to='/news'>News Page</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
