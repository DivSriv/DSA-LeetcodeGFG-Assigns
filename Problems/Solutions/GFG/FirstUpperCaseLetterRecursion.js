/*First uppercase letter in a string(https://www.geeksforgeeks.org/first-uppercase-letter-in-a-string-iterative-and-recursive/)

Given a string find its first uppercase letter


Examples : 

Input : geeksforgeeKs
Output : K

Input  : geekS
Output : S


Solution:
*/

function getFirstUp(str,i)
{
    if (i == str.length)
         return 0;
    if (str[i] == str[i].toUpperCase())
            return str[i];
    return getFirstUp(str, i+1);
}

console.log(getFirstUp(str,0))

