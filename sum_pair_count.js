import { Chance } from 'chance';
import { createRequire} from 'module';
const require = createRequire(import.meta.url)
const prompt = require('prompt-sync')()

const sum = parseInt(prompt('sum : '),10)
const a = [2,5,0,3,3,3]


let count =0;
let freq = {}
let comp ;
for(let i=0;i<a.length;i++){
comp = sum-a[i]
if(freq[comp]){
    count = count + freq[comp]
}
if(freq[a[i]]){
    freq[a[i]] = freq[a[i]] + 1
}
else{
    freq[a[i]] = 1
}
}

console.log(count)