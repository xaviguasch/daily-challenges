// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)!

const stringReversal = (str) => {
  // return str.split('').reverse.join('')
  let reverseStr = ''

  for (const char of reverseStr) {
    reverseStr = char + reverseStr
  }

  return reverseStr
}

console.log(stringReversal('Hello World!'))
