Bottom View of Binary Tree (https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1)


Given a binary tree, print the bottom view from left to right.
A node is included in bottom view if it can be seen when we look at the tree from bottom.

                      20
                    /    \
                  8       22
                /   \        \
              5      3       25
                    /   \      
                  10    14

For the above tree, the bottom view is 5 10 3 14 25.
If there are multiple bottom-most nodes for a horizontal distance from root, then print the later one in level traversal. For example, in the below diagram, 3 and 4 are both the bottommost nodes at horizontal distance 0, we need to print 4.

                      20
                    /    \
                  8       22
                /   \     /   \
              5      3 4     25
                     /    \      
                 10       14

For the above tree the output should be 5 10 4 14 25.
 

Example 1:

Input:

       1
     /   \
    3     2
Output: 3 1 2
Explanation:
First case represents a tree with 3 nodes
and 2 edges where root is 1, left child of
1 is 3 and right child of 1 is 2.

Thus nodes of the binary tree will be
printed as such 3 1 2.
Example 2:

Input:

         10
       /    \
      20    30
     /  \
    40   60
Output: 40 20 60 30
Your Task:
This is a functional problem, you don't need to care about input, just complete the function bottomView() which takes the root node of the tree as input and returns an array containing the bottom view of the given tree.

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(N).

Constraints:
1 <= Number of nodes <= 10^5
1 <= Data of a node <= 10^5



```js

//User function Template for javascript

/**
 * @param {Node} root
 * @returns {number[]}
*/

class Solution
{
    //Function to return a list containing the bottom view of the given tree.
    bottomView(root)
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
            
            // if(map[verticalLine] == undefined){map[verticalLine] = node.data;}
            
            // //for bottom view just replace value each time
            // //it automatically becomes bottom view as we are doing level order traversal
            // else{
            //     map[verticalLine] = node.data;
            // }
            
            //OR
            //for bottom view just replace value each time
            //it automatically becomes bottom view as we are doing level order traversal            
            map[verticalLine] = node.data;
            
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

function newNode(root, data)
{
    if(root === null)
        root = new Node(data);
    else if(data < root.data)
        root.left = newNode(root.left, data);
    else
        root.right = newNode(root.right, data);
    return root;
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

function inorderUtil(root, res){
    if (root === null)
        return;
    inorderUtil(root.left, res);
    res.push(root.data);
    inorderUtil(root.right, res);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let obj = new Solution();
        let res = obj.bottomView(root); 
        let s = '';
        for(let i=0; i<res.length; i++){
            s += res[i] +" ";
        }
        console.log(s);
        
    }
}
// } Driver Code Ends

```
