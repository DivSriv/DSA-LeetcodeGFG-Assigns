//Course Schedule (https://practice.geeksforgeeks.org/problems/course-schedule/1)

/*

There are a total of n tasks you have to pick, labeled from 0 to n-1. Some tasks may have prerequisites tasks, for example to pick task 0 you have to first finish tasks 1, which is expressed as a pair: [0, 1]
Given the total number of n tasks and a list of prerequisite pairs of size m. Find a ordering of tasks you should pick to finish all tasks.
Note: There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all tasks, return an empty array. Returning any correct order will give the output as 1, whereas any invalid order will give the output 0.


Example 1:

Input:
n = 2, m = 1
prerequisites = {{1, 0}}
Output:
1
Explanation:
The output 1 denotes that the order is
valid. So, if you have, implemented
your function correctly, then output
would be 1 for all test cases.
One possible order is [0, 1].


Example 2:

Input:
n = 4, m = 4
prerequisites = {{1, 0},
                 {2, 0},
                 {3, 1},
                 {3, 2}}
Output:
1
Explanation:
There are a total of 4 tasks to pick.
To pick task 3 you should have finished
both tasks 1 and 2. Both tasks 1 and 2
should be pick after you finished task 0.
So one correct task order is [0, 1, 2, 3].
Another correct ordering is [0, 2, 1, 3].
Returning any of these order will result in
a Output of 1.

Your Task:
The task is to complete the function findOrder() which takes two integers n, and m and a list of lists of size m*2 denoting the prerequisite pairs as input and returns any correct order to finish all the tasks. Return an empty array if it's impossible to finish all tasks.


Constraints:
1 ≤ n ≤ 10^4
0 ≤ m ≤ 10^5
0 ≤ prerequisites[0], prerequisites[1] ≤ 105
All prerequisite pairs are unique
prerequisites[0] ≠ prerequisites[1]

Expected Time Complexity: O(n+m).
Expected Auxiliary Space: O(n+m).

*/



//User function Template for Java

class Solution
{
    static int[] findOrder(int n, int m, ArrayList<ArrayList<Integer>> prerequisites) 
    {
        // add your code here
        Map<Integer, Set<Integer>> graph = new HashMap<>();
        Map<Integer, Integer> inDegree = new HashMap<>();
        // Build graph and in-degree map
        for (ArrayList<Integer> pre : prerequisites) {
            int to = pre.get(0), from = pre.get(1);
            graph.putIfAbsent(from, new HashSet<Integer>());
            graph.get(from).add(to);
            inDegree.put(to, inDegree.getOrDefault(to, 0) + 1);
        }
        // count used for attended courses
        int count = 0;
        // visit non-pre courses first
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < n; i++) {
            if (!inDegree.containsKey(i)) {
                queue.offer(i);
            }
        }
        List<Integer> res = new LinkedList<>();
        // BFS traverse (or just while loop)
        while (!queue.isEmpty()) {
            for (int size = queue.size(); size > 0; size--) {
                int cur = queue.poll(); 
                res.add(cur);
                count++;
                if (!graph.containsKey(cur)) { continue; }
                Set<Integer> neighbors = graph.get(cur); 
                for (int neighbor : neighbors) {
                    inDegree.put(neighbor, inDegree.get(neighbor) - 1);
                    // queue new non-pre courses
                    if (inDegree.get(neighbor) == 0) {
                        queue.offer(neighbor);
                    }
                } 
            }
        }
        return count == n ? res.stream().mapToInt(i -> i).toArray() : new int[]{};
    }
}









//{ Driver Code Starts
//Initial template for JAVA

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
            int n = Integer.parseInt(st[0]);
            int m = Integer.parseInt(st[1]);

            for (int i = 0; i < n; i++)
                list.add(i, new ArrayList<Integer>());

            ArrayList<ArrayList<Integer>> prerequisites = new ArrayList<>();
            for (int i = 1; i <= m; i++) {
                String s[] = read.readLine().trim().split("\\s+");
                int u = Integer.parseInt(s[0]);
                int v = Integer.parseInt(s[1]);
                list.get(v).add(u);
                ArrayList<Integer> pair = new ArrayList<>();
                pair.add(u);
                pair.add(v);
                prerequisites.add(pair);
            }

            int[] res = new Solution().findOrder(n, m, prerequisites);
            
            if(res.length==0)
                System.out.println("No Ordering Possible");
            else
            {
                if (check(list, n, res) == true)
                    System.out.println("1");
                else
                    System.out.println("0");
            }
        }
    }
    static boolean check(ArrayList<ArrayList<Integer>> list, int V, int[] res) {
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
