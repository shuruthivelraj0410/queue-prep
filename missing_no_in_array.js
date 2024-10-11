import { createRequire} from 'module';


const require = createRequire(import.meta.url)
const prompt = require('prompt-sync')()

const n = parseInt(prompt('size of the array : '),10)
const a = new Array();

for(let i=0;i<n;i++){
let b = parseInt(prompt(`${i}th digit : `),10)
a.push(b)
}

let max = a.length + 1
const ExpectedSum = max*(max+1)/2;

const ActualSum = a.reduce((sum,i)=> sum = sum+i,0)

console.log('Missing number is : ',ExpectedSum - ActualSum)