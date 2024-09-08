// // ---------- strings -----------
// // let str = 'dearworld!'

// // console.log(typeof str);
// // console.log(str.length); // for calculate no. of characters of string variable
// // console.log(str[9]); // print individual character of sting variable, start with 0



// // -------- template literals ---------
// let specialString = `This is a template literals`;

// console.log(specialString);
// console.log(typeof specialString);

// // ------- example -------
// obj = {

//     product : 'bat',
//     price : 1600,
// } ;

// let str = 'hello';
// let str2 = 'world';

// // // console.log('The price of', obj.product ,'is' , obj.price ,'rupees');

// // let output = `The price of ${obj.product} is ${obj.price} rupees`;

// let output = `The price of ${str} is ${str2} rupees`;

// console.log(output);

//  console.log(`this is a power of template literals ${1 + 2 + 3} `); // also A way Right
// let template = `this is a power of template literals ${1 + 2 + 3} `;
// console.log(template);






// ----- escape characters --------
// console.log('Java Script');
// console.log('Java');
// console.log('Script');

// console.log('Java\nScript'); // backSlash-->\n next line

// console.log('Java\tScript'); // backSlash-->\t tap space

// // ESCAPE CHARACTERS M 2 CHARACTERS HOTY HN 1=\ , 2=t/n BUT LENGHT CLACULATE KRTAY TIME YE 1 CHARACTER COUNT KIYA GYE GA!!!!!!! REMINDER! LENGHT CALCULATE KRTY TIME SPACE BHI CALCULATE HOTI H....

// //  1,2,3,4,5,6,7,8,9,10,11,12   // 5 = is Space & 6 = is Character Single Space
// let java = 'Java \nScript';
// console.log(java.length);







// --------- Methods of strings -----------
// let str = 'Dear World'
// let newStr = str.toUpperCase();

// console.log(str);
// console.log(newStr);

// ------ Also ager Us hi variable M new Value store Krwa den, Jab bhi kam Ho gye ga -------
// let str = 'Dear World'; 
// str = str.toLowerCase();
// console.log(str);

// ---- Trim also a method Jo Star aur End Sy Space Remove Krta history, Words Aur Alphabets K Between Sy Nhe ----
// let trim = `      Java   Script           is best      `
// console.log(trim.trim());







// ----------String Method  Slice -----------
// let slice = '012345678'
// console.log(slice.slice(1 , 8))

// let alpha = 'hello'
// // console.log(alpha.slice(0 , 4))
// // console.log(alpha.slice(2 , 3))
// console.log(alpha.slice(2)) // only starting index bhi srif bta Sakty hn, aur US k abd K saray Print Ho gyn gy.







// ---------- concate 2 strings ---------
// let str1 = 'dear';
// let str2 = 'world';
// // let result = str2.concat(str1);
// let result = 'I am learning technology from' +    str1 +   str2; // it is a also way CONCATINATION

// console.log(result);






// ------------ str.replace(replaceValue,newValue) -----------------
// let str = 'hello';
// console.log(str.replace('l' , 'p'))
// console.log(str.replace('llo' , 'lp'))
// console.log(str.replaceAll('l' , 'p')) // also same alphabet change







// // ------------ character search ------------
// let str = 'i am a web developer'
// console.log(str.charAt(7));  // for find alphabet







