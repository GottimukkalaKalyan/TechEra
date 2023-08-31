import {Link} from 'react-router-dom'

import './index.css'

const NavBar = () => (
  <Link to="/">
    <div className="navMainContainer">
      <div className="NavContentContainer">
        <img
          className="Logo"
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="website logo"
        />
      </div>
    </div>
  </Link>
)
export default NavBar
