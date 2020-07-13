import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  font-family: "Playfair Display", serif;
  padding: 8px;
  text-align: center;

  a {
    color: currentColor;
    text-decoration: none;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      {new Date().getFullYear()}
      {" | "}
      <a href="https://twitter.com/rfoel" target="_blank" rel="noreferrer">
        rfoel
      </a>
      {" | "}
      <a href="https://github.com/rfoel/drake"> source code</a>
    </StyledFooter>
  )
}

export default Footer
