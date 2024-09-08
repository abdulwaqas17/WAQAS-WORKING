// -------------- Arrays -------------
// ---- using For loop ------
// let team = ["waqas","nehal","zeeshan" ,"abdullah","arib"];
// // index start with 0 , 0,1,2,3,4,5,6.....
// // for (let index = 0; index < team.length; index++){ // length = No. of values in array
// //     console.log(team[index]);
// // }
// // console.log(team);

// // -------- using For Of Loop (prefer method) ---------
// for (let member of team){ // to access individual member separately
//     console.log(member);
// }




// ----- another example ------
// let cities = ['karachi', 'lahore', 'islamabad', 'quetta', 'peshawar', 'multan', 'sialkot']; //array

// for (let city in cities){
//     console.log(city ,cities[city]);
// }

// let cities = ['karachi', 'lahore', 'islamabad', 'quetta', 'peshawar', 'multan', 'sialkot']; //array PREFER METHOD FOR OF.

// for (let city of cities){
//     console.log(city.toUpperCase());
// }











// ---------------- METHOD OF ARRAYS -------------
// let players = ['babar', 'rizwan', 'fakhar', 'shaheen'];
// console.log(players);
// // ------- push method -------
// players.push('naseem', 'imad', 'shadab');
// // --------- pop method --------
// let outPlayer = players.pop();
// console.log(players);
// // ------- pop Return vlaue When print -------
// console.log(outPlayer);
// // -------- to string method Convert array to string form ------
// console.log(players.toString());
// console.log(players);




// ------- concat method To join multiple arrays -----
// let pakTeam = ['amir', 'shaheen', 'naseem'];
// let ausTeam = ['starc', 'cummins', 'hazelwood'];
// let engTeam = ['wooks', 'jofra', 'curran'];

// let bowlers = pakTeam.concat(engTeam, ausTeam); // return a array
// // let bowlers = pakTeam + ausTeam + engTeam;  // string return kr rha h INSPECT OF array
// console.log(bowlers);



// ------- un shift method Like a Oppsite of push -------
// let teams = ['pak', 'ind', 'ban', 'afg', 'sri'];
// // ------- un shift ------
// teams.unshift('uae');
// console.log(teams);
// // ------- shift --------
// let elemenateTeam = teams.shift();
// console.log(teams);
// console.log(elemenateTeam);




// ---------- slice method of arrray | not change original array -------
// let teams = ['pak', 'ind', 'ban', 'afg', 'sri'];
// console.log(teams);
// console.log(teams.slice(2  )); // go to the last
// console.log(teams.slice(0, 2)); // last number non-includive





// ---------- splice method of arrray | change original array -------
let num = [1, 2, 3, 4, 5, 6, 7];
// console.log(num);
// // -------- splice ------
// num.splice(2, 2, 101,102);
// console.log(num);

// Add Element        stage        No. of delete items acc. to stage        new value JO add krni hn
// num.splice(            1,                        0,                                     1.5);
// console.log(num);

// // Delete Element
// num.splice(0 , 1);
// console.log(num);

// Replace Element
num.splice(5, 1, 106);
console.log(num);