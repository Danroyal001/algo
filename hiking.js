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

function isPositive(x){
    return x > 0;
}

function isZero(x){
    return x == 0;
}

function countingValleys(steps, path) {
    
    const upHill = "U";
    const downHill = "D";
    
    let mountains = 0;
    let valleys = 0;
    let seaLevel = 0;
    let currentLevel = 0;
    let currentLevelString = '';
    
    const pathArr = path.split("");
    
    pathArr.reduce((a, b) => {
        let previousLevel = '';
        previousLevel = currentLevel;
        
        if ((a == b)){
            
            if ((a == upHill) && (b == upHill)){
                if (previousLevel == seaLevel){
                    mountains += 1;
                    currentLevel += 1;
                } else {
                    currentLevel += 1;
                }
            } else if ((a == downHill) && (b == downHill)) {
                if (previousLevel == seaLevel){
                    valleys += 1;
                    currentLevel -= 1;
                } else {
                    currentLevel -= 1;
                }
            }
            
        } else if (a != b){
            
            if ((a == upHill) && (b == downHill)){
                if (previousLevel == seaLevel){
                    valleys += 1;
                    currentLevel -= 1;
                } else {
                    currentLevel -= 1;
                }
            } else if ((a == downHill) && (b == upHill)){
                if (previousLevel == seaLevel){
                    mountains += 1;
                    currentLevel +=1 ;
                } else {
                    currentLevel += 1;
                }
            }
            
        }
    });
    
    return valleys;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
