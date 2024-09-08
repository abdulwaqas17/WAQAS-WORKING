// ------------ Practice Question ------------
let marks = [90, 83 ,38, 72, 99, 80, 55];
sum = 0;

for (let mark of marks){// sumValue  +     mark    = newSumValue....
    sum = sum + mark; //       0     +      90     =     90 ,        90 + 83 = 153 , 153 + 38 = ......
    // sum += mark;  // shot cut, assignment operator
}

console.log(sum);

console.log(sum/marks.length);