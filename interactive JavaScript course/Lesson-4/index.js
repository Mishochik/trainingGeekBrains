// function getTempPrediction(firstDay, secondDey) {
//     const nextDay = firstDay * 0.5 + secondDey * 0.5;
//     return nextDay;
// }
// const temp_1 = getTempPrediction(13, 12);
// const temp_2 = getTempPrediction(12, 15);
// console.log(temp_1, temp_2);


// const get = function () {
//     console.log('sdifjgiu')
// }
// get();


// function foo(a, b) {
//     a ? a = a : a = 3;
//     if (!b) { b = 5 };
//     console.log(a);
//     console.log(b);
// }
// foo();


// function getTempPrediction(...days) {
//     let sum = 0;
//     days.forEach(day => sum += day);
//     console.log(days);
//     return sum / days.length;
// }
// console.log(getTempPrediction(20, 22, 18, 17));


// let value = 1;
// let start = 5;
// while (start != 1) {
//     value = value * start;
//     start -= 1;
// }
// console.log(value);

// function factorial(number) {
//     console.log(number);
//     if (number <= 1) {
//         return number
//     } else {
//         return number * factorial(number - 1);
//     }
// }
// console.log(factorial(5));

// function factorial(number) {
//     return number <= 1 ? number : number * factorial(number - 1);
// }
// console.log(factorial(5));


// const x = 10;
// (function () {
//     console.log(x);
// })();


// ---------- ДЗ ----------
function foo(...numbers) {
    let n = 1;
    for (let m of numbers) {
        n = n * m;
    }
    console.log(n);
}

foo(5, 2);
foo(5);
foo(2, 1, 3, 4); 
