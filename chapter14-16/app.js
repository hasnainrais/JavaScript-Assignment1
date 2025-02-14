


//  Chapter No: 14-16


// Question No:01


let studentsName = [];

// Question No:02

let studentName = [{}];

// Question No:03

let strArray = ['Hasnain' , 'Rais' , 'Cricket' , 'Biryani' , 'Lassi'];

// Question No:04

let numArray = [7 , 3 , 1999 ,  20 , 2024 , 7];

// Question No:05

let bolArray = ['true' , 'false'];

// Question No:06

let mixedArray = ['hanain' , 'rais' , 7399 , 'hasnain@gmail.com' , 'true'];

// Question No:07

let qualificationInPakistan = ['SSC' , 'HSC' , 'BCS' , 'BS' , 'BCOM' , 'MS' , 'M.phil' , 'Phd'];

document.write("<h1>Qualifications:</h1><br/>");

document.write(`1) ${qualificationInPakistan[0]}<br/>`);
document.write(`2) ${qualificationInPakistan[1]}<br/>`);
document.write(`3) ${qualificationInPakistan[2]}<br/>`);
document.write(`4) ${qualificationInPakistan[3]}<br/>`);
document.write(`5) ${qualificationInPakistan[4]}<br/>`);
document.write(`6) ${qualificationInPakistan[5]}<br/>`);
document.write(`7) ${qualificationInPakistan[6]}<br/>`);
document.write(`8) ${qualificationInPakistan[7]}<br/><br/>`);


//  Question No:08


// let studentNames = ['Michael' , 'John' , 'Tony'];

// let studentMarks = [320 , 230 , 480];

// let studentPercentage1 = (studentMarks[0] / 500) * 100;
// let studentPercentage2 = (studentMarks[1] / 500) * 100;
// let studentPercentage3 = (studentMarks[2] / 500) * 100;

// document.write(`Score of ${studentNames[0]} is ${studentMarks[0]}. Percentage: ${studentPercentage1}% <br/>`);
// document.write(`Score of ${studentNames[1]} is ${studentMarks[1]}. Percentage: ${studentPercentage2}% <br/>`);
// document.write(`Score of ${studentNames[2]} is ${studentMarks[2]}. Percentage: ${studentPercentage3}% <br/><br/>`);


// //  Question No:09


let colorNames = ['Green' , 'Blue' , 'Yellow' , 'White' , 'Black' , 'Pink' , 'Purple'];

// document.write(`<p>Color Names:${colorNames}</p><br/>`);

// let userChoice = prompt('what color you add start of the color names?');

// colorNames.unshift(`${userChoice}`);

// document.write(`<p>Color Names:${colorNames}</p><br/>`);

// let userChoice1 = prompt('what color you add end of the color names?');

// colorNames.push(`${userChoice1}`);

// document.write(`<p>Color Names:${colorNames}</p><br/>`);

// let userChoice2 = prompt('what color you add start of the color names?');
// let userChoice3 = prompt('what color you add start of the color names?');


// colorNames.unshift(`${userChoice2},${userChoice3}`);

// document.write(`<p>Color Names:${colorNames}</p><br/>`);

// colorNames.shift();

// document.write(`<p>Color Names:${colorNames}</p><br/>`);

// colorNames.pop();

// document.write(`<p>Color Names:${colorNames}</p><br/>`);

// let userChoice4 = prompt('which index you want to add color?');
// let userChoice5 = prompt('which color you  add ?');





 // let index = colorNames.indexOf(userChoice4 , userChoice5);
// colorNames.splice(userChoice4,0,userChoice5);



// document.write(`<p>Color Names:${colorNames}</p><br/>`);

// let userChoice6 = prompt('which index you want to add color?');
// let userChoice7 = prompt('which index you want to delete ?');
// let userChoice8 = prompt('which index you  add color?');

// colorNames.splice(userChoice6,userChoice7,userChoice8);

// document.write(`<p>Color Names:${colorNames}</p><br/>`);


//  Question No:10


// let studentScore = [320,230,480,120];

// document.write(`<p>Scores of Students: ${studentScore}</p>`);

// studentScore.sort();

// document.write(`<p>Ordered scores of students: ${studentScore}</p>`);


//  Question No:11


let citiesList = ['karachi' , 'lahore' , 'peshawar' , 'islamabad' , 'quetta' ];
document.write(`<p>Cities list: ${citiesList}</p>`);

citiesList.splice(0,3);

document.write(`<p>Selected Cities: ${citiesList}</p>`);


//  Question No:12


let arr = ["This", "is", "my", "cat"];

document.write(`<h1>Array:<h1/>${arr}`);

document.write(`<h1>String:<h1/>${arr.join(" ")}<br/>`);


//  Qusetion No:13


let devices = ["keyboard", "mouse", "printer", "monitor"];

document.write(`<h1>Devices:<h1/> ${devices}`);

document.write(`<h1>Out:<h1/>${devices.shift()}`);
document.write(`<h1>Out:<h1/>${devices.shift()}`);
document.write(`<h1>Out:<h1/>${devices.shift()}`);
document.write(`<h1>Out:<h1/>${devices.shift()}`);


// Question No:14


let devices2 = ["keyboard", "mouse", "printer", "monitor"];


document.write(`<h1>Devices:<h1/> ${devices2}`);

document.write(`<h1>Out:<h1/>${devices2.pop()}`);
document.write(`<h1>Out:<h1/>${devices2.pop()}`);
document.write(`<h1>Out:<h1/>${devices2.pop()}`);
document.write(`<h1>Out:<h1/>${devices2.pop()}<br/>`);


//  Question No:15


let mobManufaturer = ["Apple", "Samsung", "Nokia", "Motorola", "Sony", "Haier"];

document.write(`<label>Mobile Manufaturer</label>
    <select>
    <option value = "apple">${mobManufaturer.shift()}</option>
    <option value = "samsung">${mobManufaturer.shift()}</option>
    <option value = "nokia">${mobManufaturer.shift()}</option>
    <option value = "motorola">${mobManufaturer.shift()}</option>
    <option value = "sony">${mobManufaturer.shift()}</option>
    <option value = "haier">${mobManufaturer.shift()}</option>
</select>`);











































