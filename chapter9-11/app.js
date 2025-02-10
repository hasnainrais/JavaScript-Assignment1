


//  Chapter No: 9-11

// User Input & Conditional Statment


//  Question No: 01

// let userCity = prompt("Enter your city name");

// if(userCity == "karachi" || userCity == "Karachi"){
//     document.write("Welcome to city of Lights <br/>");
    
// }else{
//     document.write(`Welcome to ${userCity} city <br/>`);
    
// };


//  Question No: 02

// let userGender = prompt("Enter your Gender");

// if(userGender == "male" || userGender == "Male"){
//     document.write("Good Morning Sir")
// }else if(userGender == "female" || userGender == "Female"){
//     document.write("Good Mornong Mam <br/>");
    
// }else{
//     document.write("Good Morning <br/>");
    
// };


//  Question No:03


// let trafficSignal = prompt("Enter road traffic signal light color");

// if(trafficSignal == "red" || trafficSignal == "Red"){
//     document.write("Must Stop <br/>");
// }else if(trafficSignal == "yellow" || trafficSignal =="Yellow"){
//     document.write("Ready to Move <br/>");
// }else if(trafficSignal == "green" || trafficSignal == "Green"){
//     document.write("Move now <br/>");
// }else{
//     document.write("Invalid color light <br/>");
    
// };



//  Question No: 04

// let userRemainingFuel = prompt ("Enter your remaing fuel in car");

// if(userRemainingFuel <= 0.25){
//     document.write("Please refill the fuel in your car <br/>");
// }else{
//     document.write(`Fuel your car is greather then 0.25liters <br/>`);
// };


//  Question No: 05

// let a = 4;

// if(++a === 5){
//     alert('given condition for variable a is true');
// };

// let b = 82;

// if(b++ === 83){
//     alert('given condition for variable b is true');
// };

// let c = 12 ;

// if (c++ === 13){
//     alert('condition 1 is true');
// }else if (c === 13 ){
//     alert('condition 2 is true');
// }else if (++c < 14){
//     alert('condition 3 is true');
// }else if (c === 14){
//     alert('condition 4 is true')
// }


// let materialCost = 20000;
// let labourCost = 2000;

// let totalCost = materialCost + labourCost;

// if(totalCost === labourCost + materialCost){
//     alert('The cost equals');
// };

// if (true){
//     alert('True');
// };

// if (false){
//     alert('false');
// };

// if ("car" < "cat"){
//     alert('car is samller then cat');
// };


// //  Question No:06


// let userObtainedMarks = prompt('Enter your obtained marks');
// let userTotalMarks = prompt ('Enter Total Marks Eaxams');

// let userPercentage = (userObtainedMarks / userTotalMarks) * 100;

// document.write("<h1>Mark Sheet</h1> <br/><br/>");

// if(userPercentage >= 80){
//     document.write(`Total Marks: ${userTotalMarks}<br/> 
//         Obtained Marks: ${userObtainedMarks} <br/> 
//         Percentage: ${userPercentage}% <br/> 
//         Grade: A-One <br/>
//         Remarks: Excellent`);
// }else if(userPercentage >= 70){
//     document.write(`Total Marks: ${userTotalMarks}<br/> 
//         Obtained Marks: ${userObtainedMarks} <br/> 
//         Percentage: ${userPercentage}% <br/> 
//         Grade: A <br/>
//         Remarks: Good`);
// }else if(userPercentage >= 60){
//     document.write(`Total Marks: ${userTotalMarks}<br/> 
//         Obtained Marks: ${userObtainedMarks} <br/> 
//         Percentage: ${userPercentage}% <br/> 
//         Grade: B <br/>
//         Remarks: You need to improve`);
// }else if(userPercentage < 60){
//     document.write(`Total Marks: ${userTotalMarks}<br/> 
//         Obtained Marks: ${userObtainedMarks} <br/> 
//         Percentage: ${userPercentage}% <br/> 
//         Grade: Fail <br/>
//         Remarks: Sorry <br/><br/>`);
// };


//  Question No: 07

// let userGuessNumber = prompt("Guess the Secret Number");
// let secretNumber = 7;

// document.write("<h1>Number Guess Game</h1>")

// if ( userGuessNumber == secretNumber){
//     document.write('Bingo! Correct answere <br/>');
// }else if (userGuessNumber == ++secretNumber){
//     document.write('Close enough to correct answere <br/>');
// }else{
//     document.write('Try Again! <br/>');
// };


//  Question no: 08

// let userGivenNumber = prompt("Enter Number");
// if (userGivenNumber == 0 || userGivenNumber == 3 || userGivenNumber == 6 || userGivenNumber == 9 ){
//     document.write(`${userGivenNumber} is divisible by 3 <br/>`);
// }


//  Question No: 09

// let userNumber = prompt("Enter your Number");

// if (userNumber % 2 == 0){
//     document.write(`${userNumber} is an even number <br/>`);
// }else{
//     document.write(`${userNumber} is an odd number <br/>`);

// }


//  Question No: 10

// let userGivenTemprature = prompt("Enter your city temperature");

// if(userGivenTemprature > 40 ){
//     document.write('It is too hot outside');
// }else if(userGivenTemprature > 30){
//     document.write('The Weather today is normal');
// }else if(userGivenTemprature > 20){
//     document.write('Today Weather is cool');
// }else if(userGivenTemprature > 10){
//     document.write('OMG! Today weather is so cool');
// }


//  Question No: 11

let userNum1 = prompt("Enter first number");
let userOperator = prompt("Select operator");
let userNum2 = prompt("Enter second number");
let add1 = parseInt(userNum1);
let add2 = parseInt(userNum2);

// parseInt(userNum1);
// parseInt(userNum2);

if(userOperator == "+"){
    document.write(add1 + add2);
}else if(userOperator == "-"){
    document.write(userNum1 - userNum2);
}else if (userOperator == "*"){
    document.write(userNum1 * userNum2);
}else if(userOperator == "/"){
    document.write(userNum1 / userNum2);
}else if(userOperator == "%"){
    document.write(userNum1 % userNum2);
}





