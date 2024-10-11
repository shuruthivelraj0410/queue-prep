let a = [4,3,2,7,8,2,3,1];
let freq = {}
for(let i=0;i<a.length;i++){
if(freq[a[i]]){
    freq[a[i]] = freq[a[i]] + 1
}
else{
    freq[a[i]] = 1;
}
}
let b = new Array();
for(let i in freq){
    if(freq[i] == 2)
{
    b.push(parseInt(i,10))
}
}


console.log(b)