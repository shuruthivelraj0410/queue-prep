import {createRequire} from 'module';
const require = createRequire(import.meta.url)
const prompt = require('prompt-sync')()


class Graph{
    constructor(){
        this.list={}
        this.visited = new Set()
    }
    insertNode(from,to){
        if(this.list[from]){
            this.list[from].push(to)
        }else{
            this.list[from] = new Array();
            this.list[from].push(to)
        }
        if(this.list[to]){
            this.list[to].push(from)
        }else{
            this.list[to] = new Array();
            this.list[to].push(from)
        }
        console.log(`node connected from ${from} to ${to}`)
    }
    deleteNode(from,to){
        if(this.list[from]){
          this.list[from] = this.list[from].filter(val=>val!=to)
          if(this.list[to]){
            this.list[to] = this.list[to].filter(val=>val!=from)
            console.log(`node deleted from ${from} to ${to}`)
        }else{
            console.log(`No ${to} found in the list`)
        }
        }else{
            console.log(`No ${from} found in this list`)
        }
    }
    bfs(startNode){
    let queue = new Array();
    let visited = new Set()
    queue.push(startNode)
    visited.add(startNode)
    while(queue.length > 0){
        let currentNode = queue.shift();
        this.list[currentNode].forEach((val)=>{
            if(!visited.has(val)){
                visited.add(val)
                queue.push(val)
            }
        })
    }
    return visited
    }
    dfs(startNode){
        this.visited.add(startNode)
        console.log("------------------->",this.list[startNode])
        this.list[startNode].forEach((val)=>{
            if(!this.visited.has(val)){
                this.dfs(val)
            }
        })
        return this.visited
    }
    display(){
        console.log(this.list)
    }
}

let shouldContinue = true;
let from;
let to;
const graph = new Graph()
while(shouldContinue){
console.log('1.insertNode\n2.deleteNode\n3.display\n4.bfs\n5.Exit\n6.dfs')
let n = parseInt(prompt('choose option n : '),10)
switch(n){
    case 1:
         from = parseInt(prompt('from : '),10)
         to = parseInt(prompt('to : '),10)
        graph.insertNode(from,to)
    break;
    case 2:
        from = parseInt(prompt('from : '),10)
         to = parseInt(prompt('to : '),10)
         graph.deleteNode(from,to)
    break;
    case 3:
        graph.display()
    break;
    case 4:
        let startNode = parseInt(prompt('startNode : '),10)
        console.log(graph.bfs(startNode))
    break;
    case 5:
        shouldContinue = false
    break;
    case 6:
        let startNode1 = parseInt(prompt('startNode : '),10)
        console.log(graph.dfs(startNode1))
    break;
    default:
        console.log("choose a correct options")
    break;    
}
}