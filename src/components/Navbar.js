import React, { useState } from "react"
import { Link } from "gatsby"
import { FaAlignJustify } from "react-icons/fa"
import logo from "../assets/images/logo.svg"

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="site logo" />
          </Link>
          <button onClick={() => setShow(!show)} className="nav-btn">
            <FaAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            onClick={() => setShow(false)}
            className="nav-link"
            activeClassName="active-link"
          >
            Home
          </Link>
          <Link
            to="/recipes"
            onClick={() => setShow(false)}
            className="nav-link"
            activeClassName="active-link"
          >
            Recipes
          </Link>
          <Link
            to="/tags"
            onClick={() => setShow(false)}
            className="nav-link"
            activeClassName="active-link"
          >
            Tags
          </Link>
          <Link
            to="/about"
            onClick={() => setShow(false)}
            className="nav-link"
            activeClassName="active-link"
          >
            About
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" onClick={() => setShow(false)} className="btn">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
