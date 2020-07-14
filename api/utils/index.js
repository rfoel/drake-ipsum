import songs from "./songs.json"

export const getParagraphs = n => {
  const paragraphs = []
  do {
    const sentences = getSentences(getRandomNumber())
    paragraphs.push(sentences)
  } while (paragraphs.length < n)
  return paragraphs.join("\n\n")
}

export const getRandomItem = array =>
  array[Math.floor(Math.random() * array.length)]

export const getRandomNumber = (min = 3, max = 7) =>
  Math.random() * (max - min) + min

export const getSentences = n => {
  const sentences = []
  do {
    const song = getRandomItem(songs)
    const sentence = getRandomItem(song.lyrics)
    sentences.push(sentence)
  } while (sentences.length < n)
  return sentences.join(". ") + "."
}

export const getWords = n => {
  let words
  do {
    const song = getRandomItem(songs)
    words = getRandomItem(song.lyrics)
  } while (words.split(" ").length !== n)
  return words + "."
}
