import React from "react"
import styled from "styled-components"

import Ovo from "../images/ovo.svg"

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 16px;

  svg {
    min-width: 56px;
    max-width: 56px;
  }
`

const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-weight: 900;
  margin: 0 16px;
`

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <Ovo />
      <Title>{title}</Title>
    </StyledHeader>
  )
}

export default Header
