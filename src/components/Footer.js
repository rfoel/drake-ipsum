import React from "react"
import styled from "styled-components"
import { FeedbackForm } from "feedback-fish"

const StyledFooter = styled.footer`
  font-family: "Playfair Display", serif;
  padding: 8px;
  text-align: center;

  a {
    color: currentColor;
    text-decoration: none;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: none;
  }
`

const SendFeedback = () => <button type="button">send feedback</button>

const Footer = () => {
  return (
    <StyledFooter>
      {new Date().getFullYear()}
      {" | "}
      <a href="https://twitter.com/rfoel" target="_blank" rel="noreferrer">
        rfoel
      </a>
      {" | "}
      <a
        href="https://github.com/rfoel/drake-ipsum"
        target="_blank"
        rel="noreferrer"
      >
        source code
      </a>
      {" | "}
      <FeedbackForm
        projectId="3786bf6e4716e5"
        triggerComponent={SendFeedback}
      />
    </StyledFooter>
  )
}

export default Footer
