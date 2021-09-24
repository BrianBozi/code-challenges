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
