/*Minimum Platforms(https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1)

Given arrival and departure times of all trains that reach a railway station. Find the minimum number of platforms required for the railway station so that no train is kept waiting.
Consider that all the trains arrive on the same day and leave on the same day. Arrival and departure time can never be the same for a train but we can have arrival time of one train equal to departure time of the other. At any given instance of time, same platform can not be used for both departure of a train and arrival of another train. In such cases, we need different platforms.


Example 1:

Input: n = 6 
arr[] = {0900, 0940, 0950, 1100, 1500, 1800}
dep[] = {0910, 1200, 1120, 1130, 1900, 2000}
Output: 3
Explanation: 
Minimum 3 platforms are required to 
safely arrive and depart all trains.
Example 2:

Input: n = 3
arr[] = {0900, 1100, 1235}
dep[] = {1000, 1200, 1240}
Output: 1
Explanation: Only 1 platform is required to 
safely manage the arrival and departure 
of all trains. 

Your Task:
You don't need to read input or print anything. Your task is to complete the function findPlatform() which takes the array arr[] (denoting the arrival times), array dep[] (denoting the departure times) and the size of the array as inputs and returns the minimum number of platforms required at the railway station such that no train waits.

Note: Time intervals are in the 24-hour format(HHMM) , where the first two characters represent hour (between 00 to 23 ) and the last two characters represent minutes (this may be > 59).


Expected Time Complexity: O(nLogn)
Expected Auxiliary Space: O(n)


Constraints:
1 ≤ n ≤ 50000
0000 ≤ A[i] ≤ D[i] ≤ 2359
*/


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number[]} dep
 * @param {number} n
 * @returns {number}
*/

class Solution {
    //Function to find the minimum number of platforms required at the
    //railway station such that no train waits.
    findPlatform(arr, dep, n)
    {
        //The concept here employed is the train departing from station
        //has to be the one which has arrived prior so it doesn't matter 
        //which train is leaving we are concerned only with the platform,
        //if the platform is empty we can divert the new train there
        
        //your code here
        arr.sort((a,b)=>a-b)
        dep.sort((a,b)=>a-b)
        
        let platformNeeded = 1;
        let result = 1;
        let i=1, j=0;
        
        while(i<n && j<n){
            if(arr[i]<=dep[j]){
                platformNeeded++;
                i++;
            }
            else if(arr[i]>dep[j]){
                platformNeeded--;
                j++;                
            }
            result = Math.max(result,platformNeeded);
        }
        return result;
    }
}




//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let dep = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            dep[i] = input_ar2[i];
        let obj = new Solution();
        let res = obj.findPlatform(arr, dep, n);
        console.log(res);
    }
}
// } Driver Code Ends
