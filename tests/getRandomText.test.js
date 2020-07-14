import getRandomText from "../api/getRandomText"

const mockRequest = (handler, req) => {
  let res
  handler(req, { send: response => (res = response) })
  return res
}

describe("getRandomText response tests", () => {
  it("should return the correct number of words", () => {
    const text = mockRequest(getRandomText, {
      query: { type: "words", value: 5 },
    })
    expect(text.split(" ").length).toBe(5)
  })

  it("should return the correct number of sentences", () => {
    const text = mockRequest(getRandomText, {
      query: { type: "sentences", value: 4 },
    })
    expect(text.split(". ").length).toBe(4)
  })

  it("should return the correct number of paragraphs", () => {
    const text = mockRequest(getRandomText, {
      query: { type: "paragraphs", value: 3 },
    })
    expect(text.split("\n").length).toBe(3)
  })
})
