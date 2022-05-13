/* Subtract the Product and Sum of Digits of an Integer
(https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/)

Given an integer number n, return the difference between the product of its digits and the sum of its digits.


Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21

Constraints:

-> 1 <= n <= 10^5
*/


var subtractProductAndSum = function(n) {
    let prod = 1;
    let sum = 0;
    let diff = 0;
    while(n>0){
        sum = sum + (n%10);
        prod = prod * (n%10);
        n = ~~(n/10);
    }
    
    return diff  = prod - sum;
};


