// Largest BST (https://practice.geeksforgeeks.org/problems/largest-bst/1)

/*

Given a binary tree. Find the size of its largest subtree that is a Binary Search Tree.
Note: Here Size is equal to the number of nodes in the subtree.

Example 1:

Input:

        1
      /   \
     4     4
   /   \
  6     8
  
Output: 1
Explanation: There's no sub-tree with size
greater than 1 which forms a BST. All the
leaf Nodes are the BSTs with size equal
to 1.
Example 2:

Input: 6 6 3 N 2 9 3 N 8 8 2

            6
        /       \
       6         3
        \      /   \
         2    9     3
          \  /  \
          8 8    2 
          
Output: 2
Explanation: The following sub-tree is a
BST of size 2: 
       2
    /    \ 
   N      8
Your Task:
You don't need to read input or print anything. Your task is to complete the function largestBst() that takes the root node of the Binary Tree as its input and returns the size of the largest subtree which is also the BST. If the complete Binary Tree is a BST, return the size of the complete Binary Tree. 

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(Height of the BST).

Constraints:
1 ≤ Number of nodes ≤ 10^5
1 ≤ Data of a node ≤ 10^6

*/


//User function Template for Java

// class Node  
// { 
//     int data; 
//     Node left, right; 
   
//     public Node(int d)  
//     { 
//         data = d; 
//         left = right = null; 
//     } 
// }



class NodeValue{
    public int minNode, maxNode, maxSizeOfSubtree;
    
    NodeValue(int minNode, int maxNode, int maxSizeOfSubtree){
        this.minNode = minNode;
        this.maxNode = maxNode;
        this.maxSizeOfSubtree = maxSizeOfSubtree;
    }
}


class Solution{
    private static NodeValue largestBSTHelper(Node root){
        if(root==null){
            return new NodeValue(Integer.MAX_VALUE, Integer.MIN_VALUE, 0);
        }
        
        NodeValue left = largestBSTHelper(root.left);
        NodeValue right = largestBSTHelper(root.right);
        
        if(left.maxNode < root.data && root.data < right.minNode){
            return new NodeValue(Math.min(root.data, left.minNode), Math.max(root.data, right.maxNode),
                                 left.maxSizeOfSubtree + right.maxSizeOfSubtree +1);
        }
        
        return new NodeValue(Integer.MIN_VALUE, Integer.MAX_VALUE, 
                             Math.max(left.maxSizeOfSubtree, right.maxSizeOfSubtree));
        
    }
    
    // Return the size of the largest sub-tree which is also a BST
    static int largestBst(Node root)
    {
        // Write your code here
        return largestBSTHelper(root).maxSizeOfSubtree;
        
    }
    
}









//{ Driver Code Starts
//Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;
import java.math.*;

class Node  
{ 
    int data; 
    Node left, right; 
   
    public Node(int d)  
    { 
        data = d; 
        left = right = null; 
    } 
}

class GFG
{
    static Node buildTree(String str)
    {
        // Corner Case
        if(str.length() == 0 || str.equals('N'))
            return null;
        String[] s = str.split(" ");
        
        Node root = new Node(Integer.parseInt(s[0]));
        Queue <Node> q = new LinkedList<Node>();
        q.add(root);
        
        // Starting from the second element
        int i = 1;
        while(!q.isEmpty() && i < s.length)
        {
              // Get and remove the front of the queue
              Node currNode = q.remove();
        
              // Get the curr node's value from the string
              String currVal = s[i];
        
              // If the left child is not null
              if(!currVal.equals("N")) 
              {
        
                  // Create the left child for the curr node
                  currNode.left = new Node(Integer.parseInt(currVal));
        
                  // Push it to the queue
                  q.add(currNode.left);
              }
        
              // For the right child
              i++;
              if(i >= s.length)
                  break;
              currVal = s[i];
        
              // If the right child is not null
              if(!currVal.equals("N")) 
              {
        
                  // Create the right child for the curr node
                  currNode.right = new Node(Integer.parseInt(currVal));
        
                  // Push it to the queue
                  q.add(currNode.right);
              }
              
              i++;
        }
    
        return root;
    }
    
    public static void main(String args[]) throws IOException {
    
       BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine().trim());
        while(t>0)
        {
            String s = br.readLine();
            Node root = buildTree(s);
            
            Solution T = new Solution();
            System.out.println(T.largestBst(root));
            
            t--;
        }
    }
}


// } Driver Code Ends
