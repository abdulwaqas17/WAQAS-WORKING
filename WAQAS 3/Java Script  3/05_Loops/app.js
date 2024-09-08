// // ------print 1 to 5------
// for (let i=1; i <= 10; i++){
//     console.log('Dear World!');
// }

// console.log('loop has endede');




// // ------caculate sum of 1 to n-------
// let sum = 0;
// let n = 6;

// // --------method 1 with n value--------
// for (let i = 1; i <= n; i++){
//     sum      =     sum      +      i;       // 0+1=1 | 1+2=3 | 3+3=6 | 6+4=10 | 10+5=15
// //variable   =  (value)0    +   1/2/3/4/5 
// }


// ------caculate sum of 1 to 5-------

// --------method 2 with out n value--------
// for (let i = 1; i <= 5; i++){
//     sum      =     sum      +      i;       // 0+1=1 | 1+2=3 | 3+3=6 | 6+4=10 | 10+5=15
// //variable   =  (value)0    +   1/23/4/5 
// }

// console.log('sum =', sum);

// console.log('2nd loop has endede');




// -------- for loop example -------
// for (let i = 1; i <= 5; i++){
// //     console.log('i =', i)
// }
// console.log(i); // show nhe Hoga Q K is ka access srif BLOCK SCOPE tak h. 

// let i;
// console.log(i);

// console.log('3rd loop has ended')




// ------- while loop --------
// let i = 0;

// while (i <= 5){

//     console.log('i =', i);
//     i++;

// }






// --------- do while LOOP ---------
// let i = 1;
// do{
//     console.log('Hello World!')
//     i++;
// } while( i <= 10);




// // --------- counting --------
// let j = 1;
// do{
//     console.log('j =', j)
//     j++;
// } while( j <= 10);








// -------- for of loop -------- work on strings and arrays
// let name = 'Muhammad Waqas'
// let noOfAlphabets = 0;

// // for        i=variable    of     above-var-name Jis pr kam krwana h 
// for ( let       i           of         name) {   // i = iterator -> Characters

//     console.log('i =', i); 
//     noOfAlphabets++;

// }

// console.log('no. of alphabet =', noOfAlphabets);












// ----------- for in loop ------------- used with objects key ALSO arrays
// let student = {

//     fullName : 'M.Waqas',
//     rollNumber : 263696,
//     class : 12,
//     isPass : true,

// };

// for( let key  in student){
//     // console.log(key);
//     // console.log('key =', key);
//     console.log('key =', key, ' --- value =', student[key]);
// }

// console.log(student);