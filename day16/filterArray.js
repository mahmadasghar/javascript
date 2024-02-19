// let array = [1,2,"agfxvsdg",23,1234,"shiuhfd"];
// // console.log(array)
// function filterArr(arr){
//     let result = []
//     for(let i = 0;i<array.length;i++){
//         console.log( typeof array[i])
//         let element = [i]
//         console.log(array[i])
//     }
// }  
// filterArr()
function pr(...args) {
    console.log(...args)
}

let array = [1,-2,3,4,-7,8,-9]
function filterArray (a){
    for( let i = 0 ; i<array.length ; i++){
        // pr(array[i])
        if(array[i]==='positive numbers'){
            pr(array[i])
        }else(
            pr(array)
        )
}
}
filterArray(array)