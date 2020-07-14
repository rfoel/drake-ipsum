import React, { useState } from "react"
import styled from "styled-components"
import qs from "querystring"
import copy from "copy-to-clipboard"

import Button from "../components/Button"
import Copy from "../images/copy.svg"
import Input from "../components/Input"
import Select from "../components/Select"
import SEO from "../components/SEO"
import { track } from "../utils"

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

  const handleCopy = () => {
    copy(text)
    track("Copy to clipboard", { value: text })
  }

  const handleGenerate = async () => {
    const response = await fetch(
      `/api/getRandomText?${qs.stringify({ type, value: number })}`
    ).then(res => res.text())
    setText(response)
    track("Generate random text", { value: response })
  }

  const handleNumberChange = ({ target }) => {
    setNumber(target.value)
    track("Number change", { value: target.value })
  }

  const handleTypeChange = ({ target }) => {
    setType(target.value)
    track("Type change", { value: target.value })
  }

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
        <Button onClick={handleCopy}>
          Copy <Copy />
        </Button>
      </Control>
      <GeneratedText>{text}</GeneratedText>
    </>
  )
}

export default IndexPage
