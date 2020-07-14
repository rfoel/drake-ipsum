import qs from "querystring"

import { getParagraphs, getSentences, getWords } from "./utils"

export default (req, res) => {
  const { query } = req
  const { type, value } = qs.parse(query)

  if (type === "words") {
    const words = getWords(Number(value))
    res.text(words)
  } else if (type === "sentences") {
    const sentences = getSentences(Number(value))
    res.text(sentences)
  } else if (type === "paragraphs") {
    const paragraphs = getParagraphs(Number(value))
    res.text(paragraphs)
  }
}
