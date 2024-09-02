// conditional statements


// --------If------- for 1 condition
// let age = 5;


// if (age >= 18) {

//     console.log("you can vote");
// }


// if (age < 18) {

//     console.log("you can not vote");

// }






// -------if else ------ager first condition true na hwi to else apply ho gye
// let mode = 'waqas';
// let color;

// // if (mode === 'dark' ){

// //     color = 'black';

// // }

// // if (mode === 'light'){

// //     color = 'white';

// // }

// if (mode === 'dark'){

//     color = 'black';

// } else{

//     color = 'blue';
// }

// console.log(color);




//Q--- voting 2
// let age = 1;

// if ( age > 8) {

//     console.log('vote');

// } else{

//     console.log('not vote');
// }


//Q---- to check num is odd or even

// let num = 13;

// if (num%2 === 0){

//     console.log(num, 'is even')

// } else{

//     console.log(num, 'is odd')
// }


// -----ELSE_IF------- for check multiple conditions
// let age = 50;

// if (age < 18 ){

//     console.log(age,'= under eighteen')

// } else if (age > 40) {

//     console.log(age,'= gentle man')

// } else {

//     console.log(age,'= eighteen +')
// }




// Q---- apply bgColor on behalf of variable name
// let mode = 'dark'

// if (mode === 'dark'){

//     bgColor = 'black';

// } else if(mode === 'secondary'){

//     bgColor = 'gray'

// } else if (mode === 'success'){

//     bgColor = 'green';

// } else if(mode === 'danger'){

//     bgColor = 'red';

// } else{

//     bgColor = 'light';
// }

// console.log('your mode is ->',bgColor)

// if (mode = 'dark') console.log(mode); not a good way to write / USING BLOCKS {} IS A GOOD PRACTICE





// -------TERNARY OPERATOR-------

let age = 35;

// age >= 18 ? console.log("adult") : console.log("kid") >> not a good practice
let result = age >= 18 ? "adult" : "Kid"; // age 18 h, kia h ?, ager h to 'adult', ager nhe h to 'kid', simple, output Ya  'adult' aye ga Ya to 'kid' >>> it is a ternary operator., SIMPLER AND COMPACT IF_ELSE

console.log(result);