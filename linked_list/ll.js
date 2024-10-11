import {createRequire} from 'module';
const require = createRequire(import.meta.url);
const prompt = require('prompt-sync')();

class Node {
    constructor(data,next){
        this.data = data;
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size =0;
    }
    insertAtHead(data){
        this.head = new Node(data,this.head)
        this.size++;
        console.log(`inserted ${data} at head`)
    }
    getSize(){
        return this.size
    }
    getHead(){
        return this.head
    }
    print(){
        let curr = this.head
        if(this.size!=0){
        while(curr){
      console.log(curr.data)
      curr = curr.next
            }
        }
        else{
            console.log("No elements present")
        }
    }
    insertAtEnd(data){
        let curr = this.head
        if(this.head!=null){
        while(curr.next!=null){
            curr = curr.next
        }
        curr.next = new Node(data)
        this.size++;
    }
    else{
        this.head = new Node(data)
        this.size++;
    }
    }
    inserDataInbetween(data,index){
        let count = 0;
        let curr = this.head;
        console.log("----------->",index)
        console.log("------------>",this.size)
        if(index<=this.size+1){
        while(count<index){
          curr = curr.next;
          count++;
        }
        let previous = curr;
        previous.next = new Node(data,curr.next)
        this.size++;
    }else{
        console.log("index is out of boundry to reach")
    }
    }
    deleteByData(data){
      let curr = this.head;
      let prev = this.head;
      while(curr){
        if(curr.data == data){
          if(curr!=this.head){
           prev.next = curr.next
           return `deleted ${data} from list`
          }else{
            this.head = curr.next;
            curr.next = null
            return `deleted ${data} from list`
          }
        }
        prev = curr;
        curr = curr.next
      }
      return `No ${data} found `
    }
}
let data;
let shouldContinue = true;
let n ;
const ll = new LinkedList()
while(shouldContinue){
    console.log('1.getSize \n2.getHead\n3.insertAtHead\n4.exit\n5.print\n6.insertAtEnd\n7.inserDataInbetween\n8.deleteByData')
    n = parseInt(prompt('choose a number : '),10)
    switch(n){
        case 1:
            console.log(ll.getSize())
        break;
        case 2:
            console.log(ll.getHead())
        break;
        case 3:
            data = parseInt(prompt('data value : '),10)
            ll.insertAtHead(data)
        break;
        case 4:
            shouldContinue = false;
            console.log("Exiting ................")
        break;
        case 5:
            ll.print()
        break;
        case 6:
            data = parseInt(prompt('data value : '),10)
            ll.insertAtEnd(data)
        break;
        case 7:
            data = parseInt(prompt('data value : '),10)
            let index = parseInt(prompt('index of value : '),10)
            ll.inserDataInbetween(data,index)
        break;
        case 8:
            data = parseInt(prompt('data value to delete : '),10)
            ll.deleteByData(data)
        break;
        default:
            console.log('choose a correct options')
        break;
    }
}

