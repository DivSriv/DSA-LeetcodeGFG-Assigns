//Shortest path in Directed Acyclic Graph (https://practice.geeksforgeeks.org/problems/shortest-path-in-undirected-graph/1)

/*

Given a Directed Acyclic Graph of N vertices from 0 to N-1 and a 2D Integer array(or vector) edges[ ][ ] of length M, where there is a directed edge from edge[i][0] to edge[i][1] with a distance of edge[i][2] for all i, 0<=i

Find the shortest path from src(0) vertex to all the vertices and if it is impossible to reach any vertex, then return -1 for that vertex.

 

Example:

Input:
n = 6, m= 7
edge=[[0,1,2],[0,4,1],[4,5,4]
,[4,2,2],[1,2,3],[2,3,6],[5,3,1]]

Output:
0 2 3 6 1 5
 

Your Task:

You don't need to print or input anything. Complete the function shortest path() which takes an integer N as number of vertices, an integer M as number of edges and a 2D Integer array(or vector) edges as the input parameters and returns an integer array(or vector), denoting the list of distance from src to all nodes.

 

Constraint:

1 <= n,m <= 100
0 <= edgei,0,edgei,1 < n
 
 

Expected Time Complexity: O(N+E), where N is the number of nodes and E is edges

Expected Space Complexity: O(N)

*/




//User function Template for Java
class Solution {
    //topo - using dfs
    private void topoSort(int node, ArrayList<ArrayList<Pair>> adj, 
        int vis[], Stack<Integer> st) {
        
        vis[node] = 1;
        
        for(int i=0; i<adj.get(node).size(); i++){
            int v = adj.get(node).get(i).first;
            if(vis[v] == 0){
                topoSort(v, adj, vis, st);
            }
        }
        st.add(node);
    }
  
    public int[] shortestPath(int N, int M, int[][] edges) {
        ArrayList<ArrayList<Pair>> adj = new ArrayList<>();
        
        for(int i=0; i<N; i++){
            ArrayList<Pair> temp = new ArrayList<Pair>();
            adj.add(temp);
        }
    
        for(int i=0; i<M; i++){
            int u = edges[i][0];
            int v = edges[i][1];
            int wt = edges[i][2];
            adj.get(u).add(new Pair(v, wt));
        }
        //topo-using dfs
        int vis[] = new int[N];
        Stack<Integer> st = new Stack<>();
        for(int i=0; i<N; i++){
            if(vis[i] == 0){
                topoSort(i, adj, vis, st);
            }
        }

        int dist[] = new int[N];
        Arrays.fill(dist,(int)1e9);
    
        dist[0] = 0;
        while(!st.isEmpty()){
            int node = st.peek();
            st.pop();
    
            for(int i=0; i<adj.get(node).size(); i++) {
                int v = adj.get(node).get(i).first;
                int wt = adj.get(node).get(i).second;
    
                if(dist[node]+wt < dist[v]){
                    dist[v] = wt + dist[node];
                }
            }
        }
    
        for(int i=0; i<N; i++){
            if(dist[i] == (int)1e9){dist[i] = -1;}
        }
        return dist;	
	}
}

class Pair{
    int first;
    int second;
    Pair(int first, int second){
        this.first = first;
        this.second = second;
    }
}









//{ Driver Code Starts
import java.util.*;
import java.lang.*;
import java.io.*;

class Main {
	public static void main(String[] args) throws IOException {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		while (T-- > 0) {
			int n = sc.nextInt();
			int m = sc.nextInt();
			int[][] edge = new int[m][3];
			for (int i = 0; i < m; i++) {
				edge[i][0] = sc.nextInt();
				edge[i][1] = sc.nextInt();
				edge[i][2] = sc.nextInt();
			}
			Solution obj = new Solution();
			int res[] = obj.shortestPath(n, m,edge);
			for (int i = 0; i < n; i++) {
				System.out.print(res[i] + " ");
			}
			System.out.println();
		}
	}
}
// } Driver Code Ends
