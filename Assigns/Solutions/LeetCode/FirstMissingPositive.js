/* First Missing Positive(https://leetcode.com/problems/first-missing-positive/)

Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.


Example 1:
Input: nums = [1,2,0]
Output: 3

Example 2:
Input: nums = [3,4,-1,1]
Output: 2

Example 3:
Input: nums = [7,8,9,11,12]
Output: 1

Constraints:
-> 1 <= nums.length <= 5 * 105
-> -231 <= nums[i] <= 231 - 1
*/


var firstMissingPositive = function(nums) {
    let i = 0;
    while(i<nums.length){
     let correct = nums[i]-1;
        if(nums[i]>0 && nums[i]<=nums.length && nums[i]!==nums[correct]){
            [nums[i],nums[correct]] = [nums[correct],nums[i]];
        }  
    
        else{
            i++;
        }
    }
    for(let index=0; index <nums.length; index++){
        if(nums[index] != index+1){
          return index+1;  
        }
    }
    return nums.length +1;
};

