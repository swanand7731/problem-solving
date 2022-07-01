/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result = []
    for(let [idx, val] of nums.entries()){
        if(idx === 0){
          result[idx] = val;
          continue;
        } 
        result[idx] = result[idx - 1] + val;
    }
    return result;
};
