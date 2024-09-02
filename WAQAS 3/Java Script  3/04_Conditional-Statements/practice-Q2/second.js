// ------practice question 2  (USING PROMPT)-------
// let result = prompt('write your Total Marks, and check Your GRADE');

// if (result >= 80){

//     console.log(result,'= congratulation, Your Grade is A "Great"');

// } else if(result < 80 && result >= 70){

//     console.log(result,'= congratulation, Your Grade is B "Fantastic"');

// } else if(result < 70 && result >= 60){

//     console.log(result,'= congratulations, Your Grade is C "Briliant"');

// } else if(result < 60){

//     console.log(result,'= congratulations, Your Grade is D "Nice"');

// } else if (result < 50){

//     console.log(result,'= Explain with sorrow, Your Grade is F "Fail"');

// } else{
//     console.log('result not found "please write your correct marks"')
// }






// ---------Part 2 through (variable)-------
let percentage = prompt('enter your percentage 0-100');
let grade;

if (percentage >= 80 && percentage <=100){

    grade = 'A';

} else if (percentage >=70 && percentage <= 79) {

    grade = 'B';

} else if (percentage >= 60 && percentage <= 69) {

    grade = 'C';

} else if (percentage >= 50 && percentage <= 59 ) {

    grade = 'D';

} else if (percentage >= 0 && percentage <= 49) {

    grade = 'F';

} else {

    grade = 'grade not found, kindly write your correct %'
}

console.log('=',percentage,'% According to your percentage, Your Grade is :', grade);