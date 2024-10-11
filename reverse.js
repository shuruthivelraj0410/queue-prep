import { createRequire} from 'module';
import {Chance} from 'chance'

const require = createRequire(import.meta.url)
const prompt = require('prompt-sync')()

const n = parseInt(prompt('size of the array : '),10)
const a = new Array();
const chance = new Chance()

for(let i=0;i<n;i++){
a.push(chance.integer({
    min:0,
    max:100
}))
}
console.log("---------> ",a)
let temp ;
let i=0;
let j= n-1;
while(i<j){
temp = a[i];
a[i] = a[j];
a[j] = temp;
i++;
j--;
}

console.log("after reverse")
console.log(a)