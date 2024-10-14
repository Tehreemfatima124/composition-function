
// Array.prototype.push = function(number) {

//     for (let i = this.length - 1; i >= 0; i-- ) {
        
//         if (this[i] === number) {
//             this.splice(i, 1); 
//         }
//     }
// };
// let arr = [1,5,6,7,3,4,7,8,9,3,4,7,0,8,];
// arr.push(7); 
// console.log(arr); 

/////////////////////////////////////////////////////////curing function ///////////////////////////////////////////////////////////////////////////


// function library(bookname) {
//         return function(writerName){
//             return function (issueDate){
//                 return function (returnDate){
//                   return `I want to take a book  ${bookname} by  ${writerName} on ${issueDate}, to be returned by  ${returnDate}`;
//                 }
//             }
//         }
    
// }
// const result = library("peerkamil")("umeraAhmad")("12/11/2024")("10//11/2024")
// console.log(result);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function library(bookname) {
//     return function(writerName){
//         return function (issueDate){
//             return function (returnDate){
//               return `I want to take a book  ${bookname} by  ${writerName} on ${issueDate}, to be returned by  ${returnDate}`;
//             }
//         }
//     }

// }
// console.log (library("peerkamil")("umeraAhmad")("12/11/2024")("10//11/2024"));
/////////////////////////////////////////////////////////////////////////////

// function multiply(a){
//     return function(b){
//         return a*b
//     }
// }
// console.log(multiply(2)(3));


// functionumber(multiply) {
//     return function(a){
//         return function(b){
//            return multiply(a,b) 
//         }
//     }
// }

/////////////////////////////////////////////////////// spread function ///////////////////////////////////////////////////////////////////////////////

let abc =['a:1','b:2','b:3']
let newabc =[...abc,'c:4','d:5']
console.log(newabc)
let xyz =[...newabc,'x:1','y:3']
console.log(xy)