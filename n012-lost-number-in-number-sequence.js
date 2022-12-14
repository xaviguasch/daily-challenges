// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

const findDeletedNumber = (arr, mixArr) => {
  if (arr.length === mixArr.length) {
    return 0
  } else {
    let arrSum = arr.reduce((acc, currV) => acc + currV, 0)
    let mixSum = mixArr.reduce((acc, currV) => acc + currV, 0)

    return arrSum - mixSum
  }

  // less optimal solution
  // return arr.filter((n) => mixArr.indexOf(n) === -1)[0] || 0
}

console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]))
console.log(findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8]))
console.log(findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3]))
