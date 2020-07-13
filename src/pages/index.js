import React, { useState } from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
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
  text-align: center;
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

  const handleNumberChange = ({ target }) => setNumber(target.value)

  return (
    <Layout>
      <SEO title="Home" />
      <Control>
        <Input
          min={1}
          max={999}
          onChange={handleNumberChange}
          value={number}
          type="number"
        />
        <Select>
          <option>Paragraphs</option>
          <option>Sentences</option>
          <option>Words</option>
        </Select>
        <Button>Generate</Button>
        <Button>
          Copy <Copy />
        </Button>
      </Control>
      <GeneratedText>
        Started. October very's own but it looks like July 4. I know way too
        many people here right now that I didn't know last year. I swear I could
        beat Serena when she playing with her left. Oh yeah, that's right, I'm
        doing me. I can you teach you how to speak my language, Rosetta Stone. I
        was running through the 6 with my woes. I might be too strung out on
        compliments, overdosed on confidence. Tuck my napkin in my shirt cause
        I'm just mobbin' like that. She said they miss the old Drake. Girl don't
        tempt me.
      </GeneratedText>
    </Layout>
  )
}

export default IndexPage
