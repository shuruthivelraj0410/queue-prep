const a = [1,2,2,2,3,4,5,6,8]
const b = [2,2,4,2,8,9]
const freq = {}
const inter = []
for(let i=0;i<a.length;i++){
    if(freq[a[i]]){
        freq[a[i]] = freq[a[i]] +1
    }else{
        freq[a[i]] = 1
    }
}

for(let i=0;i<b.length;i++){
    if(freq[b[i]]){
        freq[b[i]] = freq[b[i]] - 1;
        inter.push(b[i])
    }
}

console.log(inter)