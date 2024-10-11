// Find the max and min using lesser comparison 

import {Chance} from  'chance';
import {createRequire} from 'module';
const require = createRequire(import.meta.url)
const prompt = require('prompt-sync')()

const n = parseInt(prompt('n : '),10)
const a = new Array()
const chance = new Chance();
for(let i=0;i<n;i++){
a.push(chance.integer({
    min:-100,
    max:100
}))
}
console.log(a)
let min;
let max;
let i;
if(a.length >1){
if(a.length%2==0 ){
   if(a[0]>a[1]){
    max = a[0]
    min = a[1]
   }
   else{
    max = a[1]
    min = a[0]
   }
   i = 2
}
else{
i = 1
min = a[0]
max = a[0]
}
}
else {
throw new Error('no max and min can be determined')
}

for(i;i<n;i++){
    if(a[i]>a[i+1]){
        max = a[i] > max ? a[i] : max
        min = a[i+1] < min ? a[i+1] : min
    }
    else{
        max = a[i+1] > max ? a[i+1] : max
        min = a[i] < min ? a[i] : min
    }
}

console.log("max : ",max)
console.log("min : ",min)