import { createRequire } from 'module';
const require = createRequire(import.meta.url)
const prompt = require('prompt-sync')()

const n = parseInt(prompt('size of a stack : '), 10)
const arr = new Array()
var top = -1
const addElement = (data) => {
    if (top != n - 1) {
        arr.push(data);
        top++;
        console.log(`${data} added to array`)
    }
    else {
        console.log("Array filled")
    }
}

const removeElement = () => {
    if (top == -1 && arr.length == 0) {
        return null
    }
    top--;
    return arr.pop()
}

const printData = () => {
    return arr
}
const opt = () => {
    console.log(' 1.Add \n 2.Pop \n 3.Print \n 4.exit : ')
    let dataa = parseInt(prompt('options : '), 10)
    return dataa
}
let shouldContinue = true;
while (shouldContinue) {
    let a = opt()
    let options = a ? a : opt()
    let data;
    switch (options) {
        case 1:
            if (top >= n - 1) {
                console.log("Array filled")
            }
            else {
                data = parseInt(prompt('data value : '))
                addElement(data)
            }
            break;
        case 2:
            data = removeElement()
            if (data) {
                console.log(`${data} poped from array`)
            }
            else {
                console.log("Array emptied no elements to pop")
            }
            break;
        case 3:
            let data_arr = printData();
            if (data_arr.length) {
                console.log(data_arr)
            }
            else {
                console.log("Empty array ..No elements")
            }
            break;
        case 4:
            shouldContinue = false;
            console.log("Exiting")
            break;
        default:
            console.log("choose the correct options")
            break;
    }
}
