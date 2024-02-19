function pr(...args) {
    console.log(...args)
}
function addingNumber(a) {
    let anArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let result = 0
    // result = result + 5
    for (let i = 0; i < anArray.length; i++) {
        result = anArray[i] + result
    }
    return result
}
let result = addingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])
pr(result)
