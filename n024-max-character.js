// Given a string of characters, return the character that appears the most often.

const maxCharacter = (str) => {
  let charMap = {},
    count = 0,
    maxChar = null

  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1
  }

  for (const char in charMap) {
    if (charMap[char] > count) {
      count = charMap[char]
      maxChar = char
    }
  }
  return maxChar
}

console.log(maxCharacter('Hello World!')) // Should return 'l'
