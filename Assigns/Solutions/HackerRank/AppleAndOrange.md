## Apple and Orange
[ Apple and Orange ](https://www.hackerrank.com/challenges/apple-and-orange/problem)

![image](https://user-images.githubusercontent.com/72649014/162386461-13e94b9d-1131-4610-ba15-7e78f1fa4aee.png)


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
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let c1=0
    let c2=0
    
    for(let i=0; i<apples.length; i++){
        apples[i]+=a
    }
    for(let i=0; i<oranges.length; i++){
        oranges[i]+=b
    }
    for(let i=0; i<apples.length; i++){
        if(apples[i]>=s && apples[i]<=t){
            c1++
        }
    }
    for(let i=0; i<oranges.length; i++){
        if(oranges[i]>=s && oranges[i]<=t){
            c2++
        }
    }
    console.log(c1)
    console.log(c2)

}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const s = parseInt(firstMultipleInput[0], 10);

    const t = parseInt(firstMultipleInput[1], 10);

    const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const a = parseInt(secondMultipleInput[0], 10);

    const b = parseInt(secondMultipleInput[1], 10);

    const thirdMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const m = parseInt(thirdMultipleInput[0], 10);

    const n = parseInt(thirdMultipleInput[1], 10);

    const apples = readLine().replace(/\s+$/g, '').split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().replace(/\s+$/g, '').split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}

```
