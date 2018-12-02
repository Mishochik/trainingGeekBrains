function isPrime(n) {
    if (n < 2) {
        return false
    };
    const q = Math.floor(Math.sqrt(n));
    let i = 2;
    while (i <= q) {
        if (n % i == 0) {
            return false;
        }
        i++
    }
    return true;
}

function getPrimeNumbers(maximumNumber) {
    if (maximumNumber < 2) {
        return;
    }
    const result = [];
    let i = 2;
    while (i <= maximumNumber) {
        if (isPrime(i)) {
            result.push(i);
        }
        i++;
    }
    return result;
}

console.log(getPrimeNumbers(100));


var i = 0;
do {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 === 0) {
        console.log(`${i} - четное число`);
    } else {
        console.log(`${i} - нечетное число`);
    }

    i++;
} while (i <= 10);


for (let i = 0; i < 10; console.log(i++)) { }


// function building() {
//     for (let i = 0; i < 20; i++) {
//         let brick = 'x';
//         for (let n = 0; n < i; n++) {
//             brick += 'x';
//         }
//         console.log(brick);
//     }
// }
// building();

function building() {
    for (let i = 0; i < 20; i++) {
        let brick = 'x';
        let a = ' ';
        for (let n = 0; n < i; n++) {
            brick += 'xx';
        }
        for (let m = 20; m > i; m--) {
            brick = a + brick;
        }
        console.log(brick);
    }
}
building();

// Решение первого задания от преаодавателя 
function isSimple(num) {
    let i = 2;
    while (i < num / 2) {
        if (num % i == 0) {
            return false;
        }
        i++
    }
    return true;
}

let num = 2;
while (num <= 100) {
    if (isSimple(num)) {
        document.write(num + " ");
    }
    num++
}