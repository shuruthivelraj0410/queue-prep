const a = [1,2,4,5,6,6,7,3,9,0]
const b = [0,0,0]

const a_set = new Set(a)
console.log(a_set)
const check = ()=>{
for(let i of b){
    if(!a_set.has(i)){
        return false
    }
}
return true;
}

const res = check()
if(res){
    console.log("B is a subset of A")
}
else{
    console.log("B is not a subset of A")
}