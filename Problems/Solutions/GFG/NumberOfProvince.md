Number of Provinces(https://practice.geeksforgeeks.org/problems/number-of-provinces/1)

Given an undirected graph with V vertices. We say two vertices u and v belong to a single province if there is a path from u to v or v to u. Your task is to find the number of provinces.

Note: A province is a group of directly or indirectly connected cities and no other cities outside of the group.

Example 1:

Input:
[
 [1, 0, 1],
 [0, 1, 0],
 [1, 0, 1]
]

![image](https://user-images.githubusercontent.com/72649014/189951164-080e008a-0854-41f6-a5c0-a7bcdcdfe35a.png)

Output:
2
Explanation:
The graph clearly has 2 Provinces [1,3] and [2]. As city 1 and city 3 has a path between them they belong to a single province. City 2 has no path to city 1 or city 3 hence it belongs to another province.

Example 2:
Input:
[
 [1, 1],
 [1, 1]
]

![image](https://user-images.githubusercontent.com/72649014/189951273-e33e79d4-68d2-4e0a-8b4b-5cbb41f32678.png)

Output :
1


Your Task:  
You don't need to read input or print anything. Your task is to complete the function numProvinces() which takes an integer V and an adjacency matrix adj as input and returns the number of provinces. adj[i][j] = 1, if nodes i and j are connected and adj[i][j] = 0, if not connected.


Expected Time Complexity: O(V^2)
Expected Auxiliary Space: O(V)


Constraints:
1 ≤ V ≤ 500




```java

//User function Template for Java

class Solution {
    private static void dfs(int node, ArrayList<ArrayList<Integer>> adjacencyList , int vis[]) {
        
        vis[node] = 1; 
        
        for(Integer iter: adjacencyList.get(node)){
            if(vis[iter] == 0){
                dfs(iter, adjacencyList, vis); 
            }
        }
    }
    static int numProvinces(ArrayList<ArrayList<Integer>> adj, int V){
        
        ArrayList<ArrayList<Integer>> adjacencyList = new ArrayList<ArrayList<Integer>>(); 
        
        for(int i = 0; i < V; i++){
            adjacencyList.add(new ArrayList<Integer>()); 
        }
        
        // Matrix to Adjacency List
        for(int i = 0; i < V; i++){
            for(int j = 0; j < V; j++){
                // self nodes are not considered i.e i!=j
                if(adj.get(i).get(j) == 1 && i != j){
                    adjacencyList.get(i).add(j); 
                    adjacencyList.get(j).add(i); 
                }
            }
        }
        int vis[] = new int[V]; 
        int countProvinces = 0; 
        for(int i = 0; i < V; i++){
            if(vis[i] == 0){
               countProvinces++;
               dfs(i, adjacencyList, vis); 
            }
        }
        return countProvinces; 
    }
};









//{ Driver Code Starts
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int V = Integer.parseInt(read.readLine());
            
            ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
            
            for(int i=0; i<V; i++)
            {
                String S[] = read.readLine().split(" ");
                ArrayList<Integer> temp = new ArrayList<>();
                for(int j=0; j<V; j++)
                    temp.add(Integer.parseInt(S[j]));
                adj.add(temp);
            }

            Solution ob = new Solution();
            System.out.println(ob.numProvinces(adj,V));
        }
    }
}
// } Driver Code Ends
```











