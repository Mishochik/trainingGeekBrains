let x = 2;
let y = 1 + (x *= 2); // 1 + (2 * 2)
console.log(y);


let a = -3;
let b = 7;
if (a > 0 && b > 0) {
    console.log('a - b = ' + (a - b));
    console.log('b - a = ' + (b - a));
} else if (a < 0 && b < 0) {
    console.log('a * b = ' + (a * b));
} else {
    console.log('a + b = ' + (a + b));
}


let z = Math.round(Math.random() * 15);
const numbers = [];
switch (z) {
    case 0:
        numbers.push(0);
    case 1:
        numbers.push(1);
    case 2:
        numbers.push(2);
    case 3:
        numbers.push(3);
    case 4:
        numbers.push(4);
    case 5:
        numbers.push(5);
    case 6:
        numbers.push(6);
    case 7:
        numbers.push(7);
    case 8:
        numbers.push(8);
    case 9:
        numbers.push(9);
    case 10:
        numbers.push(10);
    case 11:
        numbers.push(11);
    case 12:
        numbers.push(12);
    case 13:
        numbers.push(13);
    case 14:
        numbers.push(14);
    case 15:
        numbers.push(15);
}
console.log('Числа от рандомного числа, пределы когорого то 0 до 15, до 15: ' + numbers);


//  sum     difference   division    multiplication
// сумма     разность    деление       умножение
function sum(x, y) {
    return x + y;
}
function difference(x, y) {
    return x - y;
}
function division(x, y) {
    return x / y;
}
function multiplication(x, y) {
    return x * y;
}
console.log(sum(5, 5));
console.log(difference(5, 5));
console.log(division(5, 5));
console.log(multiplication(5, 5));

function calculation(x, operator, y) {
    switch (operator) {
        case '+':
            return `${x} + ${y} = ${(x + y)}`;
        case '-':
            return `${x} - ${y} = ${(x - y)}`;
        case '/':
            return `${x} / ${y} = ${(x / y)}`;
        case '*':
            return `${x} * ${y} = ${(x * y)}`;
    }
}
console.log(calculation(50, '+', 50));


function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return sum(arg1, arg2);
        case '-':
            return difference(arg1, arg2);
        case '/':
            return division(arg1, arg2);
        case '*':
            return multiplication(arg1, arg2);
    }
}
console.log(mathOperation(25, 50, '+'));


console.log(null < 0);
console.log(null > 0);
console.log(null == 0);
console.log(null === 0);
console.log(null == undefined);
console.log(null === undefined);
// Значение null является литералом JavaScript, представляющим нулевое или «пустое» значение, то есть, когда нет никакого объектного значения. 


function power(val, pow) {
    if (pow === 1) {
        return val;
    }
    return val * power(val, pow - 1);
}
console.log(power(2, 8)); 