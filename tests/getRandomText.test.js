import qs from "querystring"

import getRandomText from "../api/getRandomText"

const mockRequest = (handler, req) => {
  let res
  handler(req, { text: response => (res = response) })
  return res
}

describe("getRandomText response tests", () => {
  it("should return the correct number of words", () => {
    const text = mockRequest(getRandomText, {
      query: qs.stringify({ type: "words", value: 5 }),
    })
    expect(text.split(" ").length).toBe(5)
  })

  it("should return the correct number of sentences", () => {
    const text = mockRequest(getRandomText, {
      query: qs.stringify({ type: "sentences", value: 4 }),
    })
    expect(text.split(". ").length).toBe(4)
  })

  it("should return the correct number of paragraphs", () => {
    const text = mockRequest(getRandomText, {
      query: qs.stringify({ type: "paragraphs", value: 3 }),
    })
    console.log(text)
    expect(text.split("\n\n").length).toBe(3)
  })
})
