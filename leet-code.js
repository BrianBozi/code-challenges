// TwoSum
// so were are gievn the inputs types
function twoSum(nums, target) {
    // I can work it as a js solution but using the predetermined types
    for (var i = 0; nums.length - 1; i++) {
        for (var j = i + 1; nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}
;
