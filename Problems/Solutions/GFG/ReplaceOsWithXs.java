//Replace O's with X's (https://practice.geeksforgeeks.org/problems/replace-os-with-xs0052/1)

/*

Given a matrix mat of size N x M where every element is either ‘O’ or ‘X’.
Replace all ‘O’ with ‘X’ that are surrounded by ‘X’.
A ‘O’ (or a set of ‘O’) is considered to be by surrounded by ‘X’ if there are ‘X’ at locations just below, just above, just left and just right of it.

Example 1:

Input: n = 5, m = 4

mat = {{'X', 'X', 'X', 'X'}, 
       {'X', 'O', 'X', 'X'}, 
       {'X', 'O', 'O', 'X'}, 
       {'X', 'O', 'X', 'X'}, 
       {'X', 'X', 'O', 'O'}}
       
Output: ans = {{'X', 'X', 'X', 'X'}, 
               {'X', 'X', 'X', 'X'}, 
               {'X', 'X', 'X', 'X'}, 
               {'X', 'X', 'X', 'X'}, 
               {'X', 'X', 'O', 'O'}}
               
Explanation: Following the rule the above 
matrix is the resultant matrix. 
Your Task:
You do not need to read input or print anything. Your task is to complete the function fill() which takes n, m and mat as input parameters ad returns a 2D array representing the resultant matrix.

Expected Time Complexity: O(n*m)
Expected Auxiliary Space: O(n*m)

Constraints:
1 ≤ n, m ≤ 500

*/


//User function Template for Java

class Solution{
    
    static void dfs(int row, int col, int[][] visited, char[][] a, int[] deltaRow, int[] deltaCol){
        
        visited[row][col] = 1;
        int n = a.length;
        int m = a[0].length;
        
        for(int i=0; i<4; i++){
            int nrow = row + deltaRow[i];
            int ncol = col + deltaCol[i];
            
            if(nrow>=0 && nrow<n && ncol>=0 && ncol<m && 
               visited[nrow][ncol] == 0 && a[nrow][ncol] == 'O'){
                dfs(nrow, ncol, visited, a, deltaRow, deltaCol);
            }
        }
    }    
    
    static char[][] fill(int n, int m, char a[][])
    {
        // code here

        int[] deltaRow = {-1, 0, 1, 0};
        int[] deltaCol = {0, 1, 0, -1};
        int[][] visited = new int[n][m];
        
        for(int j=0; j<m; j++){
            if(visited[0][j] == 0 && a[0][j] == 'O'){
                dfs(0, j, visited, a, deltaRow, deltaCol);
            }
            
            if(visited[n-1][j] == 0 && a[n-1][j] == 'O'){
                dfs(n-1, j, visited, a, deltaRow, deltaCol);
            }
        }
        
        for(int i=0; i<n; i++){
            if(visited[i][0] == 0 && a[i][0] == 'O'){
                dfs(i, 0, visited, a, deltaRow, deltaCol);
            }
            
            if(visited[i][m-1] == 0 && a[i][m-1] == 'O'){
                dfs(i, m-1, visited, a, deltaRow, deltaCol);
            }
        }
        
        for(int i=0; i<n; i++){
            for(int j=0; j<m; j++){
                if(visited[i][j] == 0 && a[i][j] == 'O'){
                    a[i][j] = 'X';
                }
            }
        }
        return a;    
        
    }
}









//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            String a[] = in.readLine().trim().split(" ");
            int n = Integer.parseInt(a[0]);
            int m = Integer.parseInt(a[1]);
            char mat[][] = new char[n][m];
            for(int i=0; i<n; i++)
            {
                String S[] = in.readLine().trim().split(" ");
                for(int j=0; j<m; j++)
                {
                    mat[i][j] = S[j].charAt(0);
                }
            }
            
            Solution ob = new Solution();
            char[][] ans = ob.fill(n, m, mat);
            for(int i = 0;i < n;i++) {
                for(int j = 0;j < m;j++) {
                    System.out.print(ans[i][j] + " ");
                }
                System.out.println();
            }
        }
    }
}
// } Driver Code Ends
