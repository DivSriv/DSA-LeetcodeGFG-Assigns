## Sum Triangle From Array using Recursion
[ Sum Triangle from Array ](https://www.geeksforgeeks.org/sum-triangle-from-array/)

Given an array of integers, print a sum triangle from it such that the first level has all array elements. From then, at each level number of elements is one less than the previous level and elements at the level is be the Sum of consecutive two elements in the previous level. 

```
Input : A = {1, 2, 3, 4, 5}
Output : [48]
         [20, 28] 
         [8, 12, 16] 
         [3, 5, 7, 9] 
         [1, 2, 3, 4, 5] 

Explanation :
Here,   [48]
        [20, 28] -->(20 + 28 = 48)
        [8, 12, 16] -->(8 + 12 = 20, 12 + 16 = 28)
        [3, 5, 7, 9] -->(3 + 5 = 8, 5 + 7 = 12, 7 + 9 = 16)
        [1, 2, 3, 4, 5] -->(1 + 2 = 3, 2 + 3 = 5, 3 + 4 = 7, 4 + 5 = 9)
```

Solution:
```js
let sumTriangle=function(array){
    //Base condition
    if(array.length<1){
      return;
    }
    //JS specific solution
    let arr=[]
    
    for(let i=0;i<array.length;i++){
        arr[i]=array[i]+array[i+1]
    }
    arr.pop()
    sumTriangle(arr)
    console.log(array)
    
    
};

sumTriangle([11,22,33,44,55])

//OR

let sumTriangle=function(array){
    //Base condition
    if(array.length<1){
      return;
    }
    
    let arr=new Array(array.length-1)
    
    for(let i=0;i<array.length-1;i++){
        arr[i]=array[i]+array[i+1]
    }
    
    sumTriangle(arr)
    console.log(array)
    
    
};

sumTriangle([11,22,33,44,55])

```