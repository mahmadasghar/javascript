function pr(...args) {
    console.log(...args)
}

function printTable(a) {
    for(let i = 1; i <= 10; i++){
        pr('15 x ',i,'=', i*a )
        
    }
}
printTable(15)