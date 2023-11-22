// Arithmatic Operators: Bodmas Rule 

let result = 2 + (5 * 3 + 1) / 2

let result2 = 90 + 5 - ((5-1) * 3) / 2 - 4

let result3 = (78 * 145 + (145- 23)) * 5 / 34

// console.log('Result: ', result)
// console.log('Result2: ', result2)
// console.log('Result3: ', result3)

// Logical Operators
    // There are 3 logical operators in javascript
    // i- AND ii- OR iii- NOT
        console.log('')
        console.log('AND Operator: &&')
        console.log(false && false)
        console.log(false && true)
        console.log(true && false)
        console.log(true && true)

        // OR Operator: Symbol (||)
        console.log('')
        console.log('OR Operator: ||')
        console.log(false || false)
        console.log(false || true)
        console.log(true || false)
        console.log(true || true)

        // NOT Operator: Symbol (!) (Uniry Operator)
        console.log('')
        console.log('NOT Operator: !')
        console.log(!false)
        console.log(!true)

// Logical Expression:
    let logicalResult = !true && true || false
    let logicalResult2 = true || true && false
    let logicalResult3 = true || true && false && ( true || false && (!false))
    console.log('logicalResult: ', logicalResult)
    console.log('logicalResult2: ', logicalResult2)
    console.log('logicalResult3: ', logicalResult3)



// Falsy Values in Javascript

// false
// 0 (zero)
// -0 (minus zero)
// 0n (BigInt zero)
// '', "", `` (empty string)
// null
// undefined
// NaN (Not a Number)


// What are null & undefined values?
console.log('EXpression: ', Boolean('0'))

let someVariable

let anotherVariable = null

console.log('someVariable: ', someVariable)
console.log('anotherVariable: ', anotherVariable)

console.log(true)


