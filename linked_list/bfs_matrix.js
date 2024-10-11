import {createRequire} from 'module';
const require = createRequire(import.meta.url)
const prompt = require('prompt-sync')();

class Graph{
    constructor(numnodes){
        this.numnodes = numnodes
         this.n = new Array()
        for(let i =0;i<numnodes;i++){
         this.n.push(new Array(numnodes).fill(0))
        }
    }
    insertNode(from,to){
        if(from<this.numnodes && to < this.numnodes){
        this.n[from][to] = 1
        this.n[to][from] = 1
        }else{
            console.log("Array out of index")
        }
    }
    deleteNode(from,to){
        if(from<this.numnodes && to < this.numnodes){
            this.n[from][to] = 0
            this.n[to][from] = 0
        }else{
            console.log("Array out of index")
        }
    }
    display(){
        console.log(this.n)
    }
    bfs(startNode){
        let visited = new Array(this.n.length).fill(false);
        let queue = new Array();
        let track = new Array();
        track.push(startNode)
        queue.push(startNode);
        visited[startNode] = true;
        while(queue.length>0){
            let currentNode = queue.shift();
            for(let i=0;i<this.numnodes;i++){
            if(this.n[currentNode][i] ==1 && !visited[currentNode]){
                console.log(i)
            queue.add(i)
            visited[currentNode] = true
            track.add(i)
        }
        
    }

}
return track
}
}

let shouldContinue = true;
let from;
let to;
let numnodes = parseInt(prompt('numnodes : '),10)
const graph = new Graph(numnodes)
while(shouldContinue){
console.log('1.insertNode\n2.deleteNode\n3.display\n4.bfs\n5.Exit')
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
    default:
        console.log("choose a correct options")
    break;    
}
}