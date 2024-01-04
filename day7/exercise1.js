// Program Requirement: 
// write a javascript program in which we can multiply & divide 2 numbers. We provide both the numbers & type
// of operation (e.g. multiply, divide, add, subtract). in return, we expect the program to give us the result.

let number1 = 5
let number2 = 4
let operation = 'divide'
let result;

// ------------------ method 1 (the best method)
if (operation === 'multiply') 
{
    result = number1 * number2
} 
else if (operation === 'divide') 
{
    result = number1 / number2
}

// ------------------ method 2
if (operation === 'multiply') 
{
    result = number1 * number2
} 
else
{
    result = number1 / number2
}

// ------------------ method 3
if (operation === 'multiply') 
{
    result = number1 * number2
} 
if (operation !== 'multiply') 
{
    result = number1 / number2
}
// ------------------ method 4
if (operation === 'multiply') 
{
    result = number1 * number2
} 
if (operation == 'divide') 
{
    result = number1 / number2
}


console.log('Result is: ', result)