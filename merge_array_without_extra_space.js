import {Chance} from 'chance';
import {createRequire} from 'module';
const require = createRequire(import.meta.url)
const prompt = require('prompt-sync')()

const n = parseInt(prompt('n : '),10)
const m = parseInt(prompt('m : '),10)
const a = new Array();
const b = new Array();
// const a = [ 82, 81, 60, 57 ]
// const b =  [ 82, 57, 24, 19 ]

const chance = new Chance();

for(let i=0;i<n;i++){
    a.push(chance.integer({
        min : 0,
        max : 100
    }))
}

for(let i=0;i<m;i++){
    b.push(chance.integer({
        min : 0,
        max : 100
    }))
}

a.sort((a,b)=> a-b)
b.sort((a,b)=> a-b)
console.log("a : ",a)
console.log("b : ",b)
const gapCalculation = (gap)=>{
if(gap<=1) return 0;
return Math.floor((gap+1)/2)
}
let gap = gapCalculation(n+m)
while (gap > 0) {
    let i = 0;
    while (gap + i < n) {
        if (a[i] > a[i + gap]) {
            [a[i], a[i + gap]] = [a[i + gap], a[i]]; // Swap within arr1
        }
        i++;
    }

    let j = gap > n ? gap - n : 0;
    while (i < n && j < m) {
        if (a[i] > b[j]) {
            [a[i], b[j]] = [b[j], a[i]]; // Swap between arr1 and arr2
        }
        i++;
        j++;
    }

    if (j < m) {
        j = 0;
        while (gap + j < m) {
            if (b[j] > b[j + gap]) { // Corrected condition for swapping within arr2
                [b[j], b[j + gap]] = [b[j + gap], b[j]];
            }
            j++;
        }
    }

    gap = gapCalculation(gap);
}
console.log("results : ")
console.log("---------------------------------------")
console.log("a : ",a)
console.log("b : ",b)
console.log("---------------------------------------")