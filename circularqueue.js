import {createRequire} from 'module';
const require = createRequire(import.meta.url)
const prompt = require('prompt-sync')()
const n = parseInt(prompt('size of the queue : '),10)
var front = -1;
var rear = -1;
const queue = new Array()

const enQueue = (data)=>{
    queue.push(data)
    rear++;
    console.log(data," Added to queue")
}
const deQueue = ()=>{
    if(front>= rear || rear == -1){
        front = (front+1)%n - 1;
        rear = (rear+1)%n -1;
       console.log("No elements present")
    }
    else{
        let data = queue.shift()
        front++;
        console.log(data," Removed from queue")
    }
}
const print = ()=>{
    if(rear<=front){
        console.log("No elements present")
    }
    else{
        console.log(queue)
    }
}
let shouldContinue = true;
while (shouldContinue){
console.log('1.Add \n 2.Delete \n 3.Print \n 4.Exit')
let options = parseInt(prompt('options : '),10)
switch (options){
    case 1:
        if(rear == n-1 && front == -1){
            console.log("Queue id full")
        }
        else
        {
            enQueue(parseInt(prompt('data value : '),10))
        }
    break;
    case 2:
        deQueue()
    break;
    case 3 :
        print()
    break;
    case 4:
        shouldContinue = false;
        console.log("Exiting.....")
    break; 
    default:
        console.log("Choose a correct option")
    break;     
}
}