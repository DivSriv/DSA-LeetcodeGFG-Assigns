## Find the Duplicate Number
[ Find the Duplicate Number ](https://leetcode.com/problems/find-the-duplicate-number/)

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

```
Example 1:
Input: nums = [1,3,4,2,2]
Output: 2

Example 2:
Input: nums = [3,1,3,4,2]
Output: 3

Constraints:
-> 1 <= n <= 105
-> nums.length == n + 1
-> 1 <= nums[i] <= n
-> All the integers in nums appear only once except for precisely one integer which appears two or more times.
```

Solution:
```js
var findDuplicate = function(nums) {
//     let i = 0;
//     while(i<nums.length){
//         if(nums[i]!==i+1){
//             let correct = nums[i]-1;
//             if(nums[i]!==nums[correct]){
//                 [nums[i],nums[correct]] = [nums[correct],nums[i]];
//             }
//             else{
//                 return nums[i];
//             }
//         }
//         else{
//             i++;
//         }
//     }
   
//     return -1;  
    
    //Floyd's Detection cycle
    //Better & more intuitive & without modifying array
    
    let slow = nums[0], fast = nums[0];
    while(true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if(slow == fast) break;
    }
    slow = nums[0];
    while(slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};
```
