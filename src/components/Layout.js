import React from "react"
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"

import "normalize.css"
import "../assets/css/main.css"

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)

export default Layout
