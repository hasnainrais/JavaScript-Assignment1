

//  Loops


// Task No: 01 Palindrome Words


// let word = prompt("Enter word");
// let reverse = "";


// for(let i = word.length - 1; i >= 0; i--){

//     reverse += word[i];
// }

// if (word === reverse){
//     document.write(`It's  a palindrome word`);
    
// }else{
//     document.write(`It's not a palindrome word`);
    
// }


//  Question No: 01

// let arr = [[0, 1, 2, 3],[1, 0, 1, 2],[2, 1, 0, 1]]

// for(let i = 0; i < arr.length; i++){
//     document.write(arr[i] + "<br/>");
//     console.log(arr[i]);
    
// }

//  Question No: 02

// for (let i = 1; i <=10; i++){
//     document.write(i + "<br/>");
//     console.log(i);
    
    
// }


//  Question No: 03

// let userNumber = prompt("Enter a number to show its multiplication table");
// let userLength = prompt("Enter length multiplication table");


// for(let i = 1; i <= userLength; i++){
//     document.write(`${userNumber} x ${i} = ${userNumber * i} <br/>`);

//     console.log(`${userNumber} x ${i} = ${userNumber * i}`);
//     // console.log(i);

// }


//  Question No: 04

// let fruits = ["Apple","Banana","Mango","Orange","Strawberry"];

// for(let i = 0; i < fruits.length; i++){

//     console.log(`${fruits[i]}`);

// console.log(`Element of index ${i} is ${fruits[i]} <br/> `);

    
    
// }


//  Question No: 05


// document.write(`<h4>Counting:</h4>`)


// for (let i = 1; i <= 15; i++){
//     document.write(`${i},`)
    
// }

// document.write(`<h4>Reverse Counting:</h4>`)


// for (let i = 1; i <= 10; i++ ){
//     document.write(`${11-i},`)
//     console.log(11 - i);
    
    
// }

// document.write(`<h4>Even Number:</h4>`)


// for (let i = 0; i <= 10; i++ ){
//     document.write(`${i * 2},`)

   
//     console.log(`${i * 2}`);
    
    
// }

// document.write(`<h4>Odd Number:</h4>`)


// for (let i = 1; i <= 10; i++ ){
//     // document.write(`${2*i - 1},`)

   
//     console.log(`${2*i - 1 }`);
    
    
// }


// document.write(`<h4>Series:</h4>`)


// for (let i = 1; i <= 10; i++ ){
//     document.write(`${2*i}k,`)

   
//     console.log(`${2*i }k,`);
    
    
// }


let arr = ["cake","apple pie","cookies","chips","patties"];

let userChoice = prompt("Welcome to HS Bakery: what do you want to order sir/ma'am?");


for(let i = 0; i < arr.length; i++){
    if(userChoice == arr[i]){
        console.log(`${arr[i]} is available at index ${i} in our bakery`);
    
    }
    else{
        console.log(`We are sorry. ${userChoice} is not available in our bakery`);
    
        
    }
    break
    
    
}



