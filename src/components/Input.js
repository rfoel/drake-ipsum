import styled from "styled-components"

const Input = styled.input`
  -moz-appearance: textfield;
  border: 2px solid black;
  font-size: 16px;
  height: 40px;
  outline: none;
  padding: 0 8px;
  text-align: center;
  width: 56px;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export default Input
