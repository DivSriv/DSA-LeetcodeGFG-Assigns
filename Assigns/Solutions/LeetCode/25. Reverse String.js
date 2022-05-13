/* Reverse String(https://leetcode.com/problems/reverse-string/)

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

Constraints:

->  1 <= s.length <= 10^5
->  s[i] is a printable ascii character.
*/


var reverseString = function(s) {
    //JS direct
    // s.reverse();
    // return s;
    
    //recursion
    // let rev = function(str,start,end){
    //     if(start>=end){
    //         return str;
    //     }
    //     [str[start],str[end]]=[str[end],str[start]]
    //     start++
    //     end--
    //     rev(str,start,end)
    // }
    // rev(s,0,s.length-1)
    
    
    //Two pointer approach
    let start=0;
    let end=s.length-1;
    while(start<end){
        [s[start],s[end]] = [s[end],s[start]];
        [start,end]=[start+1,end-1];
    }
    return s;  
};
