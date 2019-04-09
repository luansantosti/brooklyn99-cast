import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  text-align: center;
  padding: 40px 0 0 0;
  color: #353535;
  a {
    color: #383838;
    text-decoration: none;
  }
`

const Footer = () => (
  <StyledFooter>
    Characters from <a href="https://www.artstation.com/luigil" target="_blank">Luigi Lucarelli</a> <br/>
    Biographies from <a href="https://brooklyn99.fandom.com" target="_blank">Brooklyn Nine-Nine Wiki</a> <br/>
    <a href="https://github.com/luansantosti/brooklyn99-cast" target="_blank">@luansantosti</a>
  </StyledFooter>
)

export default Footer

