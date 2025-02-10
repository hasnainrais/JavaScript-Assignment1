


//  Chapter 6-9

//  Math Expression


//  Question No:01

var a = 10;

document.write("<h1>Result:</h1><br/>");



document.write(`The value of a is: ${a} <br/>`);
document.write("................................<br/><br/>");


document.write(`The value of  ++a is: ${++a} <br/>`);

document.write(`Now the value of a is: ${a} <br/><br/>`);

document.write(`The value of a++ is: ${a++} <br/>`);

document.write(`Now the value of a is: ${a} <br/><br/>`);

document.write(`The value of  --a is: ${--a} <br/>`);

document.write(`Now the value of a is: ${a} <br/><br/>`);

document.write(`The value of  a-- is: ${a--} <br/>`);

document.write(`Now the value of a is: ${a} <br/><br/>`);


//  Question  No:02

var a = 2;

var b = 1;

var result = --a - --b + ++b + b-- ;

document.write(`a is ${a}<br/>`);

document.write(`b is ${b} <br/>`);

document.write(`Result is ${result} <br/><br/>`);


//  Question No:03

var userName = prompt("Please enter your name");

alert(`Hello ${userName}, nice to see you!`);


//  Question No:04

var userNumber = prompt("Enter your number")   ;

var defaultTable = 5 ;

if(userNumber == 0 ){

document.write(` ${defaultTable} x 1 = ${defaultTable * 1}<br/>`);
document.write(` ${defaultTable} x 2 = ${defaultTable * 2}<br/>`);
document.write(` ${defaultTable} x 3 = ${defaultTable * 3}<br/>`);
document.write(` ${defaultTable} x 4 = ${defaultTable * 4}<br/>`);
document.write(` ${defaultTable} x 5 = ${defaultTable * 5}<br/>`);
document.write(` ${defaultTable} x 6 = ${defaultTable * 6}<br/>`);
document.write(` ${defaultTable} x 7 = ${defaultTable * 7}<br/>`);
document.write(` ${defaultTable} x 8 = ${defaultTable * 8}<br/>`);
document.write(` ${defaultTable} x 9 = ${defaultTable * 9}<br/>`);
document.write(` ${defaultTable} x 10 = ${defaultTable * 10}<br/><br/>`);

}else{

document.write(`${userNumber} x 1 = ${userNumber * 1} <br/>`);
document.write(`${userNumber} x 2 = ${userNumber * 2} <br/>`);
document.write(`${userNumber} x 3 = ${userNumber * 3} <br/>`);
document.write(`${userNumber} x 4 = ${userNumber * 4} <br/>`);
document.write(`${userNumber} x 5 = ${userNumber * 5} <br/>`);
document.write(`${userNumber} x 6 = ${userNumber * 6} <br/>`);
document.write(`${userNumber} x 7 = ${userNumber * 7} <br/>`);
document.write(`${userNumber} x 8 = ${userNumber * 8} <br/>`);
document.write(`${userNumber} x 9 = ${userNumber * 9} <br/>`);
document.write(`${userNumber} x 10 = ${userNumber * 10} <br/><br/>`);
};


//  Question No:05

var subjec1 = prompt ("Enter Subject One");
var subjec2 = prompt ("Enter Subject Two");
var subjec3 = prompt ("Enter Subject Three");

var totalMarksOfSubject = 100;

var obtainedMarkSubject1 = prompt("Enter obtained marks of subject one");
var obtainedMarkSubject2 = prompt("Enter obtained marks of subject two");
var obtainedMarkSubject3 = prompt("Enter obtained marks of subject three");

var totalObtainedMarks = parseInt(obtainedMarkSubject1) + parseInt(obtainedMarkSubject2) + parseInt(obtainedMarkSubject3);

var subject1Percentage = ((obtainedMarkSubject1 / totalMarksOfSubject ) * 100);
var subject2Percentage = ((obtainedMarkSubject2 / totalMarksOfSubject ) * 100);
var subject3Percentage = ((obtainedMarkSubject3 / totalMarksOfSubject ) * 100);

var overAll = (totalObtainedMarks / 300) *100;



document.write(`<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr></table`);
document.write(`<table><tr><td>${subjec1}</td><td>${totalMarksOfSubject}</td><td>${obtainedMarkSubject1}</td><td>${subject1Percentage}%</td></tr></table`);
document.write(`<table><tr><td>${subjec2}</td><td>${totalMarksOfSubject}</td><td>${obtainedMarkSubject2}</td><td>${subject2Percentage}%</td></tr></table`);
document.write(`<table><tr><td>${subjec3}</td><td>${totalMarksOfSubject}</td><td>${obtainedMarkSubject3}</td><td>${subject3Percentage}%</td></tr></table`);
document.write(`<table><tr><td></td><td>${(totalMarksOfSubject)*3}</td><td>${totalObtainedMarks}</td><td>${overAll}%</td></tr></table`);





















