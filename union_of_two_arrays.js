const a = [1,1,1,2,3,4,4,4]

const set_a = new Set(a)

const b = [5,6,7,8,8]


for(let i of b)
    {
        if(!set_a.has(i)){
            set_a.add(i)
        }
    }


    console.log(Array.from(set_a))