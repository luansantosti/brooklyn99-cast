import React from 'react'
import { Link } from "react-router-dom"
import BrooklynLogo from './assets/brooklyn.png'
import styled from 'styled-components'

const StyledHeader = styled.div`
  padding: 40px 15px;
  text-align: center;
  p {
    color: #797979;
  }
`

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <img src={BrooklynLogo} alt="Brooklyn 99"/>
    </Link>
    <p>The most important cop show. Ever.</p>
  </StyledHeader>
)

export default Header