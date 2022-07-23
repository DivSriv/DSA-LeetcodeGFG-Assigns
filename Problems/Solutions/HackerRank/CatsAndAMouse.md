## Cats and a Mouse
[ Cats and a Mouse ](https://www.hackerrank.com/challenges/cats-and-a-mouse/problem)

![image](https://user-images.githubusercontent.com/72649014/162581651-44735644-559a-4cdf-8b9c-d0260889713b.png)



Solution:
```js

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {

    if(Math.abs(z-x)<Math.abs(z-y)){
        return "Cat A"
    }
    else if(Math.abs(z-x)>Math.abs(z-y)){
        return "Cat B"
    }
    else if(Math.abs(z-x)==Math.abs(z-y)){
        return "Mouse C"
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const xyz = readLine().split(' ');

        const x = parseInt(xyz[0], 10);

        const y = parseInt(xyz[1], 10);

        const z = parseInt(xyz[2], 10);

        let result = catAndMouse(x, y, z);

        ws.write(result + "\n");
    }

    ws.end();
}


```
