Boundary Traversal of binary tree (https://practice.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/0)

Given a Binary Tree, find its Boundary Traversal. The traversal should be in the following order: 

1. Left boundary nodes: defined as the path from the root to the left-most node ie- the leaf node you could reach when you always travel preferring the left subtree over the right subtree. 

2. Leaf nodes: All the leaf nodes except for the ones that are part of left or right boundary.

3. Reverse right boundary nodes: defined as the path from the right-most node to the root. The right-most node is the leaf node you could reach when you always travel preferring the right subtree over the left subtree. Exclude the root from this as it was already included in the traversal of left boundary nodes.
Note: If the root doesn't have a left subtree or right subtree, then the root itself is the left or right boundary. 

Example 1:

Input:
```

        1 
      /   \
     2     3  
    / \   / \ 
   4   5 6   7
      / \
     8   9
   
```   
Output: 1 2 4 8 9 6 7 3
Explanation:

![image](https://user-images.githubusercontent.com/72649014/184635842-ff2be938-5f8a-4c36-bb5b-d2f0a69a4f0f.png)


Example 2:

Input:
```          
            1
           /
          2
        /  \
       4    9
     /  \    \
    6    5    3
             /  \
            7     8
```            

Output: 1 2 4 6 5 7 8
Explanation:

![image](https://user-images.githubusercontent.com/72649014/184635882-50da1f18-9d16-4641-8dcc-8267e315dbc9.png)


As you can see we have not taken the right subtree. 
Your Task:
This is a function problem. You don't have to take input. Just complete the function boundary() that takes the root node as input and returns an array containing the boundary values in anti-clockwise.

Expected Time Complexity: O(N). 
Expected Auxiliary Space: O(Height of the Tree).

Constraints:
1 ≤ Number of nodes ≤ 10^5
1 ≤ Data of a node ≤ 10^5

```js

//User function Template for javascript

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @returns {number[]}
 */

class Solution {
  boundary(root) {
    //your goes code here
    if(root==null){return [];}
    if(root.left==null && root.right==null){return [root.data];}

    function getLeft(node){
      if(node==null){
        return;
      }
      if(node.left!==null){
        result.push(node.data);
        getLeft(node.left);
      }
      else if(node.right!==null){
        result.push(node.data);
        getLeft(node.right);
      }
    }
    
    
    function getLeaves(node){
      if(node==null){
        return;
      }
      getLeaves(node.left);
      if(node.left==null && node.right==null){
        result.push(node.data);
      }
      getLeaves(node.right);  
    }
    
    
    function getRight(node){
      if(node==null){
        return;
      }
      if(node.right!==null){
        getRight(node.right);
        result.push(node.data);
      }
      else if(node.left!==null){
        getRight(node.left);
        result.push(node.data);
      }
    }       
    
    let result = [];
    result.push(root.data);
    
    getLeft(root.left);
    getLeaves(root);
    getRight(root.right);
    
    
    return result;
  }
}








//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

class Node {
  constructor(data = null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function buildTree(str) {
  // Corner Case
  if (str.length === 0 || str[0] === "N") return null;

  // Create the root of the tree
  let root = new Node(parseInt(str[0]));

  // Push the root to the queue
  let queue = [];
  let start = 0;
  queue.push(root);

  // Starting from the second element
  let i = 1;
  while (queue.length !== start && i < str.length) {
    // Get and remove the front of the queue
    let currNode = queue[start];
    start++;

    // Get the current node's value from the string
    let currVal = str[i];

    // If the left child is not null
    if (currVal !== "N") {
      // Create the left child for the current node
      currNode.left = new Node(parseInt(currVal));

      // Push it to the queue
      queue.push(currNode.left);
    }

    // For the right child
    i++;
    if (i >= str.length) break;
    currVal = str[i];

    // If the right child is not null
    if (currVal !== "N") {
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
  for (; i < t; i++) {
    let s_tree = readLine().trim().split(" ");
    let root = buildTree(s_tree);
    let obj = new Solution();
    let res = obj.boundary(root);
    let s = "";
    for (let i = 0; i < res.length; i++) {
      s += res[i] + " ";
    }
    console.log(s);
  }
}
// } Driver Code Ends
```
