//  Two SUM
// brute force method, testing other ways

function twoSum( arr, target){
  // so first im going to for loop with the first index
  for( let i = 0; i < arr.length - 1; i++ ){
  // then we can do another for loop with the next index * i + 1
    for(let j = i + 1; j < arr.length; i++){
      // once were looping we can have a condition where if the two values add up to target
      // then itll return an array with the i and j values
      if(arr[i] + arr[j] === target){
        return[i, j]
      }
    }
  }
}

// note that this isnt effiecient * big - o notation.
// trying to work on ways to make it more efficient, I should be able to
// make it work  with just one loop...


// *********************************************************************************************
// Remove Element
// Given an integer array nums and an integer val,
// remove all occurrences of val in nums in-place.
// The relative order of the elements may be changed.

var removeElement = function(nums, val) {
  console.log("nums before: ", nums)
  // we can do a reverse for loop to "go top down" of the array
  for (var i = nums.length - 1; i>= 0; i--){
    // then I can add an conditional to see if nums @ i === val
    if(nums[i] === val){
      // then we can use the splice method
      nums.splice(i, 1)
    }
  }
  console.log("nums after :", nums)
  return nums.length
};

// *****************************************************************************
// Number of Good Pairs
// Given an array of integers nums, return the number of good pairs.
// A pair(i, j) is called good if nums[i] == nums[j] and i < j.
// input 1: nums = [1,2,3,1,1,3], output = 4
// input 2: nums =[1,1,1,1], output = 6
// inpout 3: nums =[ 1,2,3], output = 0

var numIdenticalPairs = function (nums) {
  console.log(nums)
  let pairs = 0;

  for (let i = 0; i <= nums.length; i++) {
    console.log("nums[i] is: ", nums[i])
    for (let j = i + 1; j <= nums.length; j++) {
      console.log("nums[j] is: ", nums[j])
      if (nums[i] === nums[j]) {
        console.log("pair", pairs)
        pairs++
      }

    }
  }
  return pairs

};

// ***************************************************************************
// Reverse String
// Write a function that reverses a string. The input string is given as an array of characters s.
// Input: s = ["h","e","l","l","o"]  \  Output: ["o","l","l","e","h"]
// Input: s = ["H","a","n","n","a","h"] \ Output: ["h","a","n","n","a","H"]


var reverseString = function(s) {

  // I can set two variable to hold the first and the last
    let first = 0
    let last =  s.length -1


    console.log("before: ", s)
    // adding a conditional
    while (first <= last){
      // now with temp we can have that hold the 1st letter
        let temp = s[first]
        // well set first to last
        s[first] = s[last]
        // and temp to be the last since its originally the first letter
        s[last] = temp
        first++
        last--
    }

    console.log("after: ", s)
    return  s
};



// 1929. Concatenation of Array
// Given an integer array nums of length n,
// you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n(0 - indexed).
// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.


var getConcatenation = function (nums) {
  // we can use .concat() to conact nums to the original nums array
  // so were just adding it on again
  return nums.concat(nums)
};
