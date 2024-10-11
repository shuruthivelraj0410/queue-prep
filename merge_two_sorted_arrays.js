import { Chance } from 'chance';
import { createRequire} from 'module';
const require = createRequire(import.meta.url)
const prompt = require('prompt-sync')()

const n1 = parseInt(prompt('size of n1 : '),10)
const n2 = parseInt(prompt('size of n2 : '),10)
const a = new Array();
const b = new Array();
const merge = new Array();
const chance = new Chance();
for(let i=0;i<n1;i++){
a.push(chance.integer({
    min : 0,
    max : 100
}))
}

for(let i=0;i<n2;i++){
    b.push(chance.integer({
        min : 0,
        max : 100
    }))
}
a.sort((a,b)=> a-b)
b.sort((a,b)=> a-b)
console.log("a : ",a)
console.log("b : ",b)
let i=0;
let j=0;
while(i<n1&&j<n2){
    if(a[i]<b[j]){
        merge.push(a[i])
        i++;
    }
    else{
        merge.push(b[j])
        j++;
    }
}

while(i<n1){
    merge.push(a[i])
    i++;
}

while(j<n2){
    merge.push(b[j])
    j++;
}

console.log('merged array : ',merge)