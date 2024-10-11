import {Chance} from 'chance';
import {createRequire} from 'module';
const require = createRequire(import.meta.url);
const prompt = require('prompt-sync')();

const a = new Array();
const n = parseInt(prompt('n : '),10)
const chance = new Chance();

for(let i=0;i<n;i++){
    a.push(chance.integer({
        min : 0,
        max : 2
    }))
}
console.log("given array : ",a)

let low = 0;
let mid = 0;
let high = n-1;
console.log("--------------->",a[mid])
while(mid<=high){
    switch(a[mid]){
        case 0:
            [a[low],a[mid]] = [a[mid],a[low]]
            low ++;
        break;
        case 1:
            mid++;
        break;
        case 2:
            [a[mid],a[high]] = [a[high],a[mid]]
            high --;
        break;
            
    }
}

console.log('result : ',a)