class Node {
    constructor(head = null,prev = null,next = null){
        this.data = head;
        this.prev = prev;
        this.next = next;
        return this
    }
}
class DoubleLinkedList {
    constructor(){
        this.head = null
        this.size = 0;
    }
    insertAtBeg(data){
    let prev = null;
    let next = this.head
    this.head = new Node(data,prev,next)
    this.size++;
    console.log(`inserted ${data} at the beginning of the chain`)
    }
    insertAtEnd(data){
        if(this.size!= 0){
            console.log(this.list)
        let curr = this.head;
        while(curr.next!=null){
        curr = curr.next
        }
        curr.next = new Node(data,curr,null)
        this.size++
        console.log(`inserted ${data} at the end of the chain`)
    }else{
        this.insertAtBeg(data)
    }
    }
    insertWithIndex(data,index){
        let count = 0;
        let curr = this.head;        
            if(index == 0){
                this.insertAtBeg(data)
            }
            else{
                if(index <= this.size){
        while(curr){
            if(count == index){
              curr.next = new Node(data,curr,curr.next)
              console.log(`inserted ${data} at ${index}`)
              this.size++;
              return
            }
            curr = curr.next;
            count++;
        }
    }else{
        console.log('index out of bound')
    }
}  
    }
    delAtBeg(){
        if(this.head && this.size>0){
        let curr = this.head;
        this.head = curr.next;
        curr.next = null
        console.log(`deleted ${curr.data} at the beginning`)
        }else{
            console.log('no elements present')
        }
    }
    delAtIndex(index){
if(index == 0){
    this.delAtBeg()
}else{
    let count =0
    let curr = this.head;
    let a = this.head;
   if(count> this.size)
    {
        console.log('index out of bound')
    }else{
        while(curr){
            if(index -1 ==count){
               a = curr.next
               curr.next = curr.next.next;
               a.next = null
               a.prev = null;
               return 
            }
            curr = curr.next;
            count++;
        }
    }
}
    }
    display(){
        let list = []
        let curr = this.head;
        while(curr)
            {
                list.push(curr.data)
                curr = curr.next
            }
            return list
    }
}


const dl = new DoubleLinkedList()
dl.insertAtBeg(5)
dl.insertAtBeg(4)
dl.insertAtBeg(3)
dl.insertAtEnd(6)
dl.insertAtEnd(7)
dl.insertWithIndex(11,0)
dl.insertWithIndex(7,0)
dl.insertWithIndex(1,1)
console.log(dl.display())
// dl.delAtBeg()
// console.log(dl.display())
// dl.delAtBeg()
// console.log(dl.display())
// dl.delAtBeg()
// console.log(dl.display())
// dl.delAtBeg()
// console.log(dl.display())
dl.delAtIndex(10)
console.log(dl.display())