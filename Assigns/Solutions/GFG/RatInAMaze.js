/*Rat in a Maze Problem - I(https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1)
Consider a rat placed at (0, 0) in a square matrix of order N * N. It has to reach the destination at (N - 1, N - 1). Find all possible paths that the rat can take to reach from source to destination. The directions in which the rat can move are 'U'(up), 'D'(down), 'L' (left), 'R' (right). Value 0 at a cell in the matrix represents that it is blocked and rat cannot move to it while value 1 at a cell in the matrix represents that rat can be travel through it.
Note: In a path, no cell can be visited more than one time. If the source cell is 0, the rat cannot move to any other cell.
Try for lexicographical order for answer strings.

Example 1:

Input:
N = 4
m[][] = {{1, 0, 0, 0},
         {1, 1, 0, 1}, 
         {1, 1, 0, 0},
         {0, 1, 1, 1}}
Output:
DDRDRR DRDDRR
Explanation:
The rat can reach the destination at 
(3, 3) from (0, 0) by two paths - DRDDRR 
and DDRDRR, when printed in sorted order 
we get DDRDRR DRDDRR.


Example 2:
Input:
N = 2
m[][] = {{1, 0},
         {1, 0}}
Output:
-1
Explanation:
No path exists and destination cell is 
blocked.
*/


class Solution {

  //first solution
    findPath(m,n){
        //code here
        
        function solve(i ,j, arr, n, ans, move, vis){
            if(i==n-1 && j==n-1){
                ans.push(move)
                return;
            }
            
            //downward
            if(i+1<n && !vis[i+1][j] && arr[i+1][j]==1){
                vis[i][j]=1
                solve(i+1,j,arr,n,ans,move+"D",vis)
                vis[i][j]=0
            }
            
            //left
            if(j-1>=0 && !vis[i][j-1] && arr[i][j-1]==1){
                vis[i][j]=1
                solve(i,j-1,arr,n,ans,move+"L",vis)
                vis[i][j]=0            
            }
            
            //right
            if(j+1<n && !vis[i][j+1] && arr[i][j+1]==1){
                vis[i][j]=1
                solve(i,j+1,arr,n,ans,move+"R",vis)
                vis[i][j]=0
            }  
            
            //upward
            if(i-1>=0 && !vis[i-1][j] && arr[i-1][j]==1){
                vis[i][j]=1
                solve(i-1,j,arr,n,ans,move+"U",vis)
                vis[i][j]=0            
            }        
        }        
        
        
        let ans = []
        
        //both are same
        // let vis = new Array(n).fill([...Array(n).fill(0)])
        let vis = new Array(n).fill().map(_=>Array(n).fill(0))
        if(m[0][0]==1){solve(0,0,m,n,ans,"",vis)}
        return ans
    }
    
    
    //better solution
    findPath(m,n){
        //code here
        
        function solve(i ,j, arr, n, ans, move, visited, di, dj){
            if(i==n-1 && j==n-1){
                ans.push(move)
                return;
            }
            
            let direction = "DLRU"
            
            for(let ind=0;ind<direction.length;ind++){
                let nexti = i+di[ind]
                let nextj = j+dj[ind]
                
                if(nexti>=0 && nextj>=0 && nexti<n && nextj<n &&
                !visited[nexti][nextj] && arr[nexti][nextj]==1){
                    visited[i][j]=1
                    solve(nexti,nextj,arr,n,ans,move+direction[ind],visited,di,dj)
                    visited[i][j]=0                    
                }
            }
            
        }        
        
        
        let ans = []
        
        //both are same
        // let vis = new Array(n).fill([...Array(n).fill(0)])
        let visited = new Array(n).fill().map(_=>Array(n).fill(0))
        
        
        //see di and dj together vertically as coordinate (x,y) 
        //i.e (di[0],dj[0]) for downward direction and then left,right,up respectively
        //as we have to try to get lexicographically ans i.e D comes before L and so on
        
        let di = [1,0,0,-1]
        let dj = [0,-1,1,0]
        if(m[0][0]==1){solve(0,0,m,n,ans,"",visited,di,dj)}
        return ans
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

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let m = [];
    let input1 = readLine().split(" ").map((x) => parseInt(x));
    for(let j = 0;j<n*n;j+=n){
      let row = new Array(n);
      for(let k = 0;k<n;k++){
        row[k] = input1[j+k];
      }
      m.push(row);
    }
    let obj = new Solution();
    let res = obj.findPath(m,n);
    if(res.length===0){
        console.log(-1);
    } else {
        res.sort(function (a, b) {
              return b[1] - a[1];
        });
        printArray(res,res.length);
    }
  }
}
// } Driver Code Ends
