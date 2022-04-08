## Find All Numbers Disappeared in an Array
[ Find All Numbers Disappeared in an Array ](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)

Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

```
Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:
Input: nums = [1,1]
Output: [2]

Constraints:
-> n == nums.length
-> 1 <= n <= 105
-> 1 <= nums[i] <= n
```

Solution:
```js
var findDisappearedNumbers = function(nums) {
    let i = 0;
    while(i<nums.length){
        let correct = nums[i]-1;
        if(nums[i]!==nums[correct]){
            [nums[i],nums[correct]] = [nums[correct],nums[i]];
        }
        else{
            i++;
        }
    }
    let arr =[];
    for(let index=0; index <nums.length; index++){
        if(nums[index] != index+1){
          arr.push(index+1);  
        }
    }
    return arr;
};
```
