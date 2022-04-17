## Plus Minus
[ Plus Minus ](https://www.hackerrank.com/challenges/plus-minus/problem)

![image](https://user-images.githubusercontent.com/72649014/163718594-d5758a0a-5adc-4df1-b0af-e399e66ffa4e.png)



Solution:
```js

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let countPos=0
    let countNeg=0
    let countZero=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
           countPos++ 
        }
        else if(arr[i]<0){
            countNeg++
        }
        else if(arr[i]==0){
            countZero++
        }
    }
    let pos=countPos/arr.length
    let neg=countNeg/arr.length
    let zero=countZero/arr.length
    
    console.log(pos.toFixed(6))
    console.log(neg.toFixed(6))
    console.log(zero.toFixed(6))

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}


```
