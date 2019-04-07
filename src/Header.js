import React from 'react'
import { Link } from "react-router-dom";
import BrooklynLogo from './assets/brooklyn.png'

const Header = () => (
  <div>
    <Link to="/"><img src={BrooklynLogo} alt="Brooklyn 99"/></Link>
    <p>The most important cop show. Ever.</p>
  </div>
)

export default Header