## CamelCase
[ CamelCase ](https://www.hackerrank.com/challenges/camelcase/problem)

![image](https://user-images.githubusercontent.com/72649014/162581623-0fc1b24d-ec87-4a77-b77f-0e5caab6b556.png)



Solution:
```js

'use strict';

const fs = require('fs');

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
 * Complete the 'camelcase' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function camelcase(s) {
    // Write your code here
    let sum =1
    for(let i=0;i<s.length;i++){
        if(/[A-Z]/.test(s[i])){
            sum+=1
        }
    }
    return sum

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = camelcase(s);

    ws.write(result + '\n');

    ws.end();
}


```
