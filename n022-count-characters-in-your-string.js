// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

const count = (str) => {
  //create obj
  let countObj = {}
  //loop -> check val exist ? val++ : val-1
  for (const c of str) {
    if (countObj[c]) {
      countObj[c]++
    } else {
      countObj[c] = 1
    }
  }

  return countObj
}

console.log(count('aba'))
console.log(count('malignant'))
console.log(count('abba'))
