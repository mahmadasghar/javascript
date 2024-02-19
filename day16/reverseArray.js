function pr(...args) {
    console.log(...args)
}
// function reverseArray (a){
// }
let Array = [1,2,3,4,5,6]
let result = []

for(let i = 0 ; i <Array.length; i++){
     result.unshift(Array[i])
}
pr(result)