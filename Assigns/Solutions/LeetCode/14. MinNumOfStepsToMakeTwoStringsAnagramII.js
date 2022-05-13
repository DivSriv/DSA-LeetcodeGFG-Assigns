/* Minimum Number of Steps to Make Two Strings Anagram II
(https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/)

You are given two strings s and t. In one step, you can append any character to either s or t.

Return the minimum number of steps to make s and t anagrams of each other.

An anagram of a string is a string that contains the same characters with a different (or the same) ordering.

Example 1:
Input: s = "leetcode", t = "coats"
Output: 7
Explanation: 
- In 2 steps, we can append the letters in "as" onto s = "leetcode", forming s = "leetcodeas".
- In 5 steps, we can append the letters in "leede" onto t = "coats", forming t = "coatsleede".
"leetcodeas" and "coatsleede" are now anagrams of each other.
We used a total of 2 + 5 = 7 steps.
It can be shown that there is no way to make them anagrams of each other with less than 7 steps.

Example 2:
Input: s = "night", t = "thing"
Output: 0
Explanation: The given strings are already anagrams of each other. Thus, we do not need any further steps.

Constraints:
-> 1 <= s.length, t.length <= 2 * 105
-> s and t consist of lowercase English letters.
*/


var minSteps = function(s, t) {
    /*My answer passed 17/70 cases */
    
    /*Correct Approach and solution*/
    let aCode = 97
    let size = 26
    function getTable(d) {
        let table = new Array(size).fill(0)
        for (let i = 0; i < d.length; i++) {
            let code = d.charCodeAt(i)
            table[code - aCode]++ 
        }
        return table
    }

    let sTable = getTable(s), tTable = getTable(t)
    console.log(sTable)
    console.log(tTable)
    let result = 0
 
    for(let i = 0; i < size; i++){
        let a= sTable[i], b= tTable[i], max= Math.max(a,b), min= Math.min(a,b)
        result += max - min
    }
    console.log(result)
    return result  
};

