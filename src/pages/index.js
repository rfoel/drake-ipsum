import React, { useState } from "react"
import styled from "styled-components"

import SEO from "../components/SEO"
import Copy from "../images/copy.svg"

const GeneratedText = styled.div`
  background-color: white;
  font-family: "Playfair Display", serif;
  font-weight: 400;
  height: auto;
  margin: 0 auto;
  max-width: 600px;
  padding: 40px;
  width: 90%;
`

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

const Select = styled.select`
  -webkit-appearance: none;
  border: 2px solid black;
  cursor: pointer;
  font-size: 16px;
  height: 40px;
  outline: none;
  padding: 0 8px;
  text-align-last: center;
`

const Button = styled.button`
  align-items: center;
  background-color: black;
  border: 0;
  color: white;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  height: 40px;
  outline: none;
  padding: 0 16px;

  svg {
    margin-left: 8px;
    width: 16px;
  }
`

const Control = styled.div`
  align-items: center;
  display: flex;
  margin: 16px auto;
  max-width: 600px;
  padding: 8px 40px;

  *:not(:last-child) {
    margin-right: 8px;
  }

  ${Button}:last-child {
    margin-left: auto;
  }
`

const IndexPage = () => {
  const [number, setNumber] = useState(3)
  const [type, setType] = useState("sentences")
  const [text, setText] = useState("")

  const handleGenerate = async () => {
    const response = await fetch("/api/getRandomText").then(res => res.text())
    setText(response)
  }

  const handleNumberChange = ({ target }) => setNumber(target.value)

  const handleTypeChange = ({ target }) => setType(target.value)

  return (
    <>
      <SEO title="Home" />
      <Control>
        <Input
          min={1}
          max={999}
          onChange={handleNumberChange}
          value={number}
          type="number"
        />
        <Select onChange={handleTypeChange} value={type}>
          <option value="paragraphs">Paragraphs</option>
          <option value="sentences">Sentences</option>
          <option value="words">Words</option>
        </Select>
        <Button onClick={handleGenerate}>Generate</Button>
        <Button>
          Copy <Copy />
        </Button>
      </Control>
      <GeneratedText>{text}</GeneratedText>
    </>
  )
}

export default IndexPage
