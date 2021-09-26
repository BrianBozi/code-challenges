//  Two SUM

// brute force method, testing other ways

function twoSum( arr, target){
  // so first im going to for loop with the first index
  for( let i = 0; i < arr.length; i++ ){
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
