//                  FOR LOOPS
//      Loops are used for repeating code for many times.
for(let i = 0; i < 67; i++){
    console.log(i)
}
//  in loops there are three types:
//      i- index (for(let i = 0;))
//      [this is index]
//          index is executed one time.
//      ii-conditions (i < 67;)
//      [this is condition]
//          condition is based on which the loop runs(loop body is executed).
//      iii- increament (i++)
//      [this is increament]
//          increament is executed everytime the loop body is executed.
//                       FOR EXAMPLE
 for( let i = 0; i < 55; i++){
    console.log(i)
 }
//    PROGRAM TO ADD FIRST "n" NATURAL NUMBERS:
let sum = 0
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for( let i = 0;i<n; i++){
    sum += (i+1)
}
// console.log("Sum of first" + n + "natural numbers is" + sum)


//                              FOR IN LOOP
//      the syntax of for in loop looks like this:
//          for( varible in object){
             // code to be executed
// }
let obj = {
    ahmad : 90,
    laiba : 100, 
    faizan : 25,
    awais : 88,
    sunain : 12
}
for( let a in obj){
        console.log("Marks of" + a + " are " + obj[a])
}
//                              FOR OF LOOP
//  the syntax of for of loop:
// for(varible of iterable){ // code}
for( let b of "Ahmad"){
    console.log(b)
}