// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

const twoSum = (nums, target) => {
  // brute force solution
  // for (let i = 0; i <= nums.length - 1; i++) {
  //   for (let y = i + 1; y <= nums.length - 1; y++) {
  //     if (nums[i] + nums[y] === target) {
  //       return [i, y]
  //     }
  //   }
  // }
}

// console.log(twoSum([2, 7, 11, 15], 9)) // Output: [0,1]
// console.log(twoSum([3, 2, 4], 6)) // Output: [1,2]

// ALTERNATIVE MORE COMPLICATED VARIATION

// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

const twoSumHard = (arr, sum) => {
  const pairs = []
  const nums = {}

  for (const num1 of arr) {
    const num2 = sum - num1
    if (nums[num2]) {
      pairs.push([num1, num2])
    } else {
      nums[num1] = 1
    }
  }
  return pairs
}

console.log(twoSumHard([1, 2, 2, 3, 4], 4)) // Should return [[2, 2], [3, 1]]
