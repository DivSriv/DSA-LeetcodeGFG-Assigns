Eventual Safe States (https://practice.geeksforgeeks.org/problems/eventual-safe-states/1)

A directed graph of V vertices and E edges is given in the form of an adjacency list adj. Each node of the graph is labelled with a distinct integer in the range 0 to V - 1.

A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node.

You have to return an array containing all the safe nodes of the graph. The answer should be sorted in ascending order.

Example 1:

Input:

![image](https://user-images.githubusercontent.com/72649014/196502653-74714830-6e8b-45ae-8a0d-ef4aff4983d6.png)

Output:
2 4 5 6
Explanation:
The given graph is shown above.
Nodes 5 and 6 are terminal nodes as there are no 
outgoing edges from either of them. 
Every path starting at nodes 2, 4, 5, and 6 all 
lead to either node 5 or 6.


Example 2:

Input:

![image](https://user-images.githubusercontent.com/72649014/196502753-100be951-1bba-46e5-bca9-26c9315402cd.png)

Output:
3
Explanation:
Only node 3 is a terminal node, and every path 
starting at node 3 leads to node 3.


Your Task:
You don't need to read or print anything. Your task is to complete the function eventualSafeNodes() which takes an integer V denoting no. of vertices and adj denoting adjacency list of the graph and returns an array of safe nodes.

Expected Time Complexity: O(V + E)

Expected Space Complexity: O(V)

Constraints:

1 <= V <= 10^4
0 <= E <= 10^4
The graph won't contain self loops.
Each node in the graph has a distinct value in the range 0 to V - 1.



```java
// User function Template for Java

class Solution {
    //2nd Way
    List<Integer> eventualSafeNodes(int V, List<List<Integer>> adj) {

        // Your code here
        int[] visited = new int[V];
        int[] curpathVisited = new int[V];
        int[] check = new int[V];
        List<Integer> safeNodes = new ArrayList<>();
        
        
        for(int i=0; i<V; i++){
            if(visited[i] == 0){
                dfsCheck(i, adj, visited, curpathVisited, check);
            }
        }
        
        for(int i=0; i<V; i++){
            if(check[i] == 1){
                safeNodes.add(i);
            }
        }
        
        return safeNodes;
    }
    
    private boolean dfsCheck(int node, List<List<Integer>> adj,
                                int[] visited, int[] curpathVisited, int[] check){
        visited[node] = 1;
        curpathVisited[node] = 1;
        check[node] = 0;
        
        for(int iter : adj.get(node)){
            if(visited[iter] == 0){
                if(dfsCheck(iter, adj, visited, curpathVisited, check) == true){
                    return true;
                }
            }
            else if(curpathVisited[iter] == 1){
                return true;
            }
        }
        
        check[node] = 1;
        curpathVisited[node] = 0;
        return false;
    }    


    
    
    //1st way
    // List<Integer> eventualSafeNodes(int V, List<List<Integer>> adj) {

    //     // Your code here
    //     int[] visited = new int[V];
    //     int[] curpathVisited = new int[V];
    //     int[] check = new int[V];
    //     List<Integer> safeNodes = new ArrayList<>();
        
        
    //     for(int i=0; i<V; i++){
    //         if(visited[i] == 0){
    //             dfsCheck(i, adj, visited, curpathVisited, check);
    //         }
    //     }
        
    //     for(int i=0; i<V; i++){
    //         if(check[i] == 1){
    //             safeNodes.add(i);
    //         }
    //     }
        
    //     return safeNodes;
    // }
    
    // private boolean dfsCheck(int node, List<List<Integer>> adj,
    //                             int[] visited, int[] curpathVisited, int[] check){
    //     visited[node] = 1;
    //     curpathVisited[node] = 1;
    //     check[node] = 0;
        
    //     for(int iter : adj.get(node)){
    //         if(visited[iter] == 0){
    //             if(dfsCheck(iter, adj, visited, curpathVisited, check) == true){
    //                 //check[node] = 0;
    //                 return true;
    //             }
    //         }
    //         else if(curpathVisited[iter] == 1){
    //             //check[node] = 0;
    //             return true;
    //         }
    //     }
        
    //     check[node] = 1;
    //     curpathVisited[node] = 0;
    //     return false;
    // }    
    
}













//{ Driver Code Starts
// Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;

// Position this line where user code will be pasted.

class GFG {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        while (T-- > 0) {
            int V = sc.nextInt();
            int E = sc.nextInt();

            List<List<Integer>> adj = new ArrayList<>();

            for (int i = 0; i < V; i++) {
                adj.add(new ArrayList<>());
            }
            for (int i = 0; i < E; i++) {
                int u = sc.nextInt();
                int v = sc.nextInt();

                adj.get(u).add(v);
            }

            Solution obj = new Solution();
            List<Integer> safeNodes = obj.eventualSafeNodes(V, adj);
            for (int i : safeNodes) {
                System.out.print(i + " ");
            }
            System.out.println();
        }
    }
}
// } Driver Code Ends
```
