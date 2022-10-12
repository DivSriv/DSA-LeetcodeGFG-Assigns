Topological sort (https://practice.geeksforgeeks.org/problems/topological-sort/1)

Given a Directed Acyclic Graph (DAG) with V vertices and E edges, Find any Topological Sorting of that Graph.


Example 1:

Input:

![image](https://user-images.githubusercontent.com/72649014/195394949-ec4e5c34-ddee-4c84-a92c-7414f7e6e257.png)


Output:
1
Explanation:
The output 1 denotes that the order is
valid. So, if you have, implemented
your function correctly, then output
would be 1 for all test cases.
One possible Topological order for the
graph is 3, 2, 1, 0.


Example 2:

Input:

![image](https://user-images.githubusercontent.com/72649014/195394869-037c63eb-0f62-4261-8a4d-032382b72271.png)


Output:
1
Explanation:
The output 1 denotes that the order is
valid. So, if you have, implemented
your function correctly, then output
would be 1 for all test cases.
One possible Topological order for the
graph is 5, 4, 2, 1, 3, 0.

Your Task:
You don't need to read input or print anything. Your task is to complete the function topoSort()  which takes the integer V denoting the number of vertices and adjacency list as input parameters and returns an array consisting of a the vertices in Topological order. As there are multiple Topological orders possible, you may return any of them. If your returned topo sort is correct then console output will be 1 else 0.


Expected Time Complexity: O(V + E).
Expected Auxiliary Space: O(V).


Constraints:
2 ≤ V ≤ 10^4
1 ≤ E ≤ (N*(N-1))/2



```java

class Solution
{
    //Function to return list containing vertices in Topological order. 
    static int[] topoSort(int V, ArrayList<ArrayList<Integer>> adj) 
    {
         // add your code here
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
        
        int[] topo = new int[V];
        int i=0;
        while(!queue.isEmpty()){
            int node = queue.remove();
            topo[i++] = node;
            
            for(int iter : adj.get(node)){
                indegree[iter]--;
                if(indegree[iter] == 0){
                    queue.add(iter);
                }
            }
        }
        return topo;
    }
    
}








//{ Driver Code Starts
import java.util.*;
import java.io.*;
import java.lang.*;

class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());

        while (t-- > 0) {
            ArrayList<ArrayList<Integer>> list = new ArrayList<>();
            String st[] = read.readLine().trim().split("\\s+");
            int edg = Integer.parseInt(st[0]);
            int nov = Integer.parseInt(st[1]);

            for (int i = 0; i < nov + 1; i++)
                list.add(i, new ArrayList<Integer>());

            int p = 0;
            for (int i = 1; i <= edg; i++) {
                String s[] = read.readLine().trim().split("\\s+");
                int u = Integer.parseInt(s[0]);
                int v = Integer.parseInt(s[1]);
                list.get(u).add(v);
            }

            int[] res = new Solution().topoSort(nov, list);

            if (check(list, nov, res) == true)
                System.out.println("1");
            else
                System.out.println("0");
        }
    }
    static boolean check(ArrayList<ArrayList<Integer>> list, int V, int[] res) {
        
        if(V!=res.length)
        return false;
        
        int[] map = new int[V];
        for (int i = 0; i < V; i++) {
            map[res[i]] = i;
        }
        for (int i = 0; i < V; i++) {
            for (int v : list.get(i)) {
                if (map[i] > map[v]) return false;
            }
        }
        return true;
    }
}

// } Driver Code Ends

```


