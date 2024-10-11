class Graph{
    constructor(){
        this.list = {}
    }
    insertNode(from,to){
        if(this.list[from]){
            this.list[from].push(to)
        }
        else{
            this.list[from] = new Array()
            this.list[from].push(to)
        }
        if(this.list[to]){
            this.list[to].push(from)
        }
        else{
            this.list[to] = new Array()
            this.list[to].push(from)
        }
    }
    deleteNode(from,to){
        if(this.list[from]){
            this.list[from] = this.list[from].filter(val => val!=to)
        }
        else{
            console.log(`No node ${from} from found`)
        }
        if(this.list[to]){
            this.list[to] = this.list[to].filter(val => val!=from)
        }else{
            console.log(`No node ${to} to found`)
        }
    }
    display(){
        console.log(this.list)
    }
}

const graph = new Graph();
graph.insertNode(1,2)
graph.insertNode(1,3)
graph.insertNode(2,3)
graph.insertNode(4,1)
graph.insertNode(2,5)
graph.insertNode(5,2)
graph.display()
graph.deleteNode(1,3)
graph.deleteNode(3,3)
graph.display()