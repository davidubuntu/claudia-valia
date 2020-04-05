import React, {useState, useEffect} from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import './Navbar.sass'
const Navbar = (props)=> {
const [active, setActive] = useState(false)
const [navBarActiveClass,SetNavBarActiveClass] = useState('')

useEffect(() => {
	// set the class in state for the navbar accordingly
	active ?  SetNavBarActiveClass('is-active') :  SetNavBarActiveClass('')
}, [active])

const toggleHamburger = () => {
	// toggle the active boolean in the state
	setActive(!active)
}

    return (
      <nav
        className="nav-main"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="nav-container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              {/* <img src={logo} alt="CVALIA" style={{ width: '88px' }} /> */}
							<span>C VALIA</span>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
