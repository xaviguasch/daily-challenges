// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

const fizzbuzz = (num) => {
  // %2 -> fizz; %3 -> buzz; 2%&&%3 -> fizzBuzz; num
  for (let i = 1; i <= num; i++) {
    if (i % 6 === 0) {
      console.log('FizzBuzz')
    } else if (i % 2 === 0) {
      console.log('Fizz')
    } else if (i % 3 === 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}

console.log(fizzbuzz(6))
console.log(fizzbuzz(8))
