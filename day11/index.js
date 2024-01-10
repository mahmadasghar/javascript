//           PRACTICE CHAPTER 3
/* //   FOR LOOP ONLY
//  QUESTION NO 01
let marks = {
    ahmad : 90,
    faizan : 80,
    sunain : 70,
    awais : 50
}
for(let i = 0;i<Object.keys(marks).length;i++){
//console.log("the marks of" + Object.keys(marks)[i] + "are" + marks[Object.keys(marks)[i]])
}
//  FOR-IN LOOP ONLY
//  QUESTION NO 02
for(let key in marks){
   // console.log("the marks of" + key + "are" + marks[key])
}
//  QUESTION NO 03
let cn = 44
let i
while (i != cn) {
    i = prompt("Enter a number")
}
console.log("you have enter a correct number")
// QUESTION NO 04
const mean = (a,b,c,d) =>{
    return (a+b+c+d)/4
}
console.log(mean(4,5,6,7))*/
//--------------------------- STRINGS-------------------------//

//Strings are used to store and n=manuplate text.
// string can be created by this syntax :
 let string = "ahmad"
 console.log(string)
 // we can make string in single qouts.
 //-------------------ECAPE SEQUENCE CHARATER--------------------//
 let fruit = 'bana\'na'
 console.log(fruit)