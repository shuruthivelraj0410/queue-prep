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
console.log("before --->",a)
let low = 0;
let temp =0;
let high =n-1;

while(low<high){
   if(a[low]<0){
low++;
   }else{
    [a[low],a[high]] = [a[high],a[low]]
    high--;
   }
}
console.log("after --->",a)