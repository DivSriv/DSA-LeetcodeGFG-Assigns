Top View of Binary Tree (https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/0)


Given below is a binary tree. The task is to print the top view of binary tree. Top view of a binary tree is the set of nodes visible when the tree is viewed from the top. For the given below tree
```
       1
    /     \
   2       3
  /  \    /   \
4    5   6     7
```
Top view will be: 4 2 1 3 7
Note: Return nodes from leftmost node to rightmost node.

Example 1:

Input:
```
      1
   /    \
  2      3
```  
Output: 2 1 3
Example 2:

Input:
```
       10
    /      \
  20        30
 /   \    /    \
40   60  90    100
```
Output: 40 20 10 30 100
Your Task:
Since this is a function problem. You don't have to take input. Just complete the function topView() that takes root node as parameter and returns a list of nodes visible from the top view from left to right.

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(N).

Constraints:
1 ≤ N ≤ 105
1 ≤ Node Data ≤ 105






```js

//User function Template for javascript

/**
 * @param {Node} root
*/
/**
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution
{
    //Function to return a list of nodes visible from the top view 
    //from left to right in Binary Tree.
    topView(root)
    {
        //your code here
        let res = [];
        if(root==null){return res;}
        
        let map = new Map();
        let queue = [];
        queue.push([root,0]);
        
        while(queue.length!==0){
            let curr = queue.shift();
            let node = curr[0];
            let verticalLine = curr[1];
            
            if(map[verticalLine] == undefined){map[verticalLine] = node.data;}
            
            if(node.left!==null){
                queue.push([node.left,verticalLine-1]);
            }
            
            if(node.right!==null){
                queue.push([node.right,verticalLine+1]);
            }
            
        }
        let arr =[];
        for(let [k,v] of Object.entries(map)){arr.push([k,v])}
        arr.sort((a,b)=>a[0]-b[0])
        
        
        for(let [k,v] of arr){
            res.push(v);
        }
        return res;
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

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function buildTree(str){
   // Corner Case
   if(str.length === 0 || str[0] === "N")
       return null;

   // Create the root of the tree
   let root = new Node(parseInt(str[0]));

   // Push the root to the queue
   let queue = [];
   let start = 0;
   queue.push(root);

   // Starting from the second element
   let i = 1;
   while(queue.length !== start && i < str.length) {

       // Get and remove the front of the queue
       let currNode = queue[start];
       start++;

       // Get the current node's value from the string
       let currVal = str[i];

       // If the left child is not null
       if(currVal !== "N") {

           // Create the left child for the current node
           currNode.left = new Node(parseInt(currVal));

           // Push it to the queue
           queue.push(currNode.left);
       }

       // For the right child
       i++;
       if(i >= str.length)
           break;
       currVal = str[i];

       // If the right child is not null
       if(currVal !== "N") {

           // Create the right child for the current node
           currNode.right = new Node(parseInt(currVal));

           // Push it to the queue
           queue.push(currNode.right);
       }
       i++;
   }

   return root;
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let obj = new Solution();
        let res = obj.topView(root);
        let s = '';
        for(let i=0; i<res.length; i++){
            s += res[i] +" ";
        }
        console.log(s);
        
    }
}
// } Driver Code Ends

```
