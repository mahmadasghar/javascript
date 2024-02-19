function getSum(a, b) {
    
    if (a === b) {
        return a
    }

    let smaller = a < b ? a : b
    let larger = a < b ? b : a

    let result = 0
    for (let i = smaller; i <= larger; i++) {
        result += i
    }
    return result
}

console.log(getSum(-1, 2))