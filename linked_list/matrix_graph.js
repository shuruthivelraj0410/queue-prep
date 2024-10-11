
import {createRequire} from 'module';
const require = createRequire(import.meta.url)
const prompt = require('prompt-sync')()

class Graph{
    constructor(nodenum){
        this.list = []
        this.nodenum = nodenum
        for(let i=0;i<nodenum;i++){
            this.list.push(new Array(nodenum).fill(0))
        }
    }
    insertNode(from,to){
        console.log('from------------>',from)
        console.log('to------------>',to)
      this.list[from][to] = 1;
      this.list[to][from] = 1
    }
    removeNode(from,to){
        this.list[from][to] =0
        this.list[to][from] =0
    }
    isEdge(from,to){
        console.log(this.list)
        return this.list[from][to]
    }
}
const nodenum = parseInt(prompt('no of nodes : '),10)
const graph = new Graph(nodenum)
graph.insertNode(1,1)
graph.insertNode(1,2)
graph.insertNode(3,4)
graph.isEdge(3,4)
