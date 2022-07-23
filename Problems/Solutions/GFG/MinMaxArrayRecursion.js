/*Recursive Programs to find Minimum and Maximum elements of array(https://www.geeksforgeeks.org/recursive-programs-to-find-minimum-and-maximum-elements-of-array/)

Given an array of integers arr, the task is to find the minimum and maximum element of that array using recursion. 


Examples : 

Input: arr = {1, 4, 3, -5, -4, 8, 6};
Output: min = -5, max = 8

Input: arr = {1, 4, 45, 6, 10, -8};
Output: min = -8, max = 45


Solution:
*/

let min=function(array){
    if(array.length==1){
      return array[0]
    }
    array.pop()

    return Math.min(array[array.length-1],min(array))
};

let max=function(array){
    if(array.length==1){
      return array[0]
    }
    array.pop()
    return Math.max(array[array.length-1],max(array))
};
console.log(min([2,4,5])) //2
console.log(max([2,4,5])) //4

