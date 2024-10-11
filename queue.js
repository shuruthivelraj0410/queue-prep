import {createRequire} from 'module';
const require = createRequire(import.meta.url)
const prompt = require('prompt-sync')()
const n = parseInt(prompt('size of the queue : '),10)
var front = -1;
var rear = -1;
const queue = new Array()
const enQueue =(data)=>{
queue.push(data)
rear ++;
console.log(`${data} addded to queue`)
}

const deQueue = ()=>{
    if(rear <= front || rear == -1){
       rear = -1 
       front = -1 
       console.log("No element in array to delete ")
    }
    else {
        let data = queue.shift()
        front ++;
        console.log(`removed ${data} from array`)
    }
}

const print = ()=>{
    if(rear!=front && rear != -1 ){
        console.log(queue)
    }
    else{
        console.log("No elements in array present")
    }
}
let shouldContinue = true
while(shouldContinue){
console.log('1. Add \n 2.Delete \n 3.Print \n 4.Exit')
let options = parseInt(prompt('options : '),10)
switch(options){
    case 1 :
        if(rear >= n-1 && front == -1)
            {
                console.log("Array is full")
            }
        else{
            let data = parseInt(prompt('data value : '),10)
            enQueue(data)
        }
    break;
    case 2 :
        deQueue()
    break;
    case 3 :
        print()
    break;
    case 4 :
        shouldContinue = false;
        console.log("exiting")
    break;
    default:
        console.log("choose the correct option")
    break;
}
}