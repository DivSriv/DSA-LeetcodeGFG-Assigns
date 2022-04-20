/* Peak Index in a Mountain Array(https://leetcode.com/problems/peak-index-in-a-mountain-array/)

Let's call an array arr a mountain if the following properties hold:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
    arr[0] < arr[1] < ... arr[i-1] < arr[i]
    arr[i] > arr[i+1] > ... > arr[arr.length - 1]

Given an integer array arr that is guaranteed to be a mountain, return any i such that:
    arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].


Example:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 1:
Input: arr = [0,1,0]
Output: 1

Example 2:
Input: arr = [0,2,1,0]
Output: 1

Example 3:
Input: arr = [0,10,5,2]
Output: 1

Constraints:
-> 3 <= arr.length <= 104
-> 0 <= arr[i] <= 106
-> arr is guaranteed to be a mountain array.
*/


var peakIndexInMountainArray = function(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] > arr[mid+1]) {
            end = mid;
        } else {
            start = mid + 1; 
        }
    }
    return start; 
};

