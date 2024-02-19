function pr(...args) {
    console.log(...args)
}

function printEven(a, b) {
    for (let i = a; i <= b; i++) {
        // pr(i)
        if (i % 2 === 0) {
            pr(i, 'is even')
        }
    }
}


printEven(25, 59)
