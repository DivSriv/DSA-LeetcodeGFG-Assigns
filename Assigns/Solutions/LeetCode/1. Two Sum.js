/* Two Sum(https://leetcode.com/problems/two-sum/)

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.


Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 10]

Constraints:

-> 2 <= nums.length <= 10^4
-> 10^9 <= nums[i] <= 10^9
-> 10^9 <= target <= 10^9
-> Only one valid answer exists.
*/

var twoSum = function(nums, target) {
    let number;
    for (let i=0; i < nums.length;i++)
        {
            for(let j = i+1; j < nums.length; j++){
                if(target == nums[i]+nums[j]){
                    number = [i,j]
                    break;
                }
            }
        }
    return number;

};


//OR

var twoSum = function(nums, target) {
    let match = false
    
    for (let i = 0, j = nums.length - 1; i <= j && !match; i++, j--) {
        let diff1 = target - nums[i]
        let index1 = nums.indexOf(diff1)
        let diff2 = target - nums[j]
        let index2 = nums.indexOf(diff2)
        
        if (index1 > -1 && index1 !== i) {
            match = true
            return [i, index1]
        }
        if (index2 > -1 && index2 !== j) {
            match = true
            return [j, index2]
        }
    }
    
};


