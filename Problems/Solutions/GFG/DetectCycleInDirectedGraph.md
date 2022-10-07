Detect cycle in a directed graph (https://practice.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1)

Given a Directed Graph with V vertices (Numbered from 0 to V-1) and E edges, check whether it contains any cycle or not.


Example 1:

Input:

![image](https://user-images.githubusercontent.com/72649014/194493252-8eaef253-5691-4d1c-be7d-df09657e66f0.png)

Output: 1
Explanation: 3 -> 3 is a cycle


Example 2:

Input:

![image](https://user-images.githubusercontent.com/72649014/194493458-af03a1f7-f906-41f2-ac52-fd08f8c1e627.png)

Output: 0
Explanation: no cycle in the graph

Your task:
You dont need to read input or print anything. Your task is to complete the function isCyclic() which takes the integer V denoting the number of vertices and adjacency list as input parameters and returns a boolean value denoting if the given directed graph contains a cycle or not.


Expected Time Complexity: O(V + E)
Expected Auxiliary Space: O(V)


Constraints:
1 ≤ V, E ≤ 10^5




```java

class Solution {
    // Function to detect cycle in a directed graph.
    //Using DFS - 1st method
    public boolean isCyclic(int V, ArrayList<ArrayList<Integer>> adj) {
        // code here
        int[] visited = new int[V];
        int[] curpathVisited = new int[V];
        
        for(int i=0; i<V; i++){
            if(visited[i] == 0){
                if(dfsCheck(i, adj, visited, curpathVisited) == true){
                    return true;
                }
            }
        }
        return false;
    }
    
    private boolean dfsCheck(int node, ArrayList<ArrayList<Integer>> adj,
                                int[] visited, int[] curpathVisited){
        visited[node] = 1;
        curpathVisited[node] = 1;
        
        for(int iter : adj.get(node)){
            if(visited[iter] == 0){
                if(dfsCheck(iter, adj, visited, curpathVisited) == true){
                    return true;
                }
            }
            else if(curpathVisited[iter] == 1){
                return true;
            }
        }
        
        
        curpathVisited[node] = 0;
        return false;
    }
    
    
    //using topo sort - if there is a cycle then topo order result length < no. of nodes
    //2nd method
    public boolean isCyclic(int V, ArrayList<ArrayList<Integer>> adj) {
        // code here
        int[] indegree = new int[V];
        for(int i=0; i<V; i++){
            for(int iter : adj.get(i)){
                indegree[iter]++;
            }
        }
        
        Queue<Integer> queue = new LinkedList<Integer>();
        for(int i=0; i<V; i++){
            if(indegree[i] == 0){
                queue.add(i);
            }
        }
        
        int count = 0;
        int i=0;
        while(!queue.isEmpty()){
            int node = queue.remove();
            count++;
            
            for(int iter : adj.get(node)){
                indegree[iter]--;
                if(indegree[iter] == 0){
                    queue.add(iter);
                }
            }
        }
        if(count == V){return false;}
        else{return true;}
    }    
    
}







//{ Driver Code Starts
import java.util.*;
import java.io.*;
import java.lang.*;

class DriverClass {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        while (t-- > 0) {
            ArrayList<ArrayList<Integer>> list = new ArrayList<>();
            int V = sc.nextInt();
            int E = sc.nextInt();
            for (int i = 0; i < V; i++)
                list.add(i, new ArrayList<Integer>());
            for (int i = 0; i < E; i++) {
                int u = sc.nextInt();
                int v = sc.nextInt();
                list.get(u).add(v);
            }
            if (new Solution().isCyclic(V, list) == true)
                System.out.println("1");
            else
                System.out.println("0");
        }
    }
}
// } Driver Code Ends

```


