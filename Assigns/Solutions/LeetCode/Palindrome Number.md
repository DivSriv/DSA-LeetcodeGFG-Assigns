## Palindrome Number
[ Palindrome Number ](https://leetcode.com/problems/palindrome-number/)

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.

```
Example:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Constraints:

-> -231 <= x <= 231 - 1
```

Solution:
```js
var isPalindrome = function(x) {
    var s = x;
    if(x < 0 || (x !== 0 && x % 10 == 0))
        return false;

    let p = 0;
    
    while (x !== 0) {
        p = p * 10 + x % 10;
        x = Math.floor(x/10);
    }
    
    return s === p;
};
```
