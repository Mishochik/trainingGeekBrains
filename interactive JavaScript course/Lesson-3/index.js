const films = [
    { 'name': 'Невероятная жизнь Уолтера Митти', 'money': 1e5 },
    { 'name': 'Логан', 'money': 2e5 + 3e4 },
    { 'name': 'Гарри Поттер', 'money': 5e6 + 9e5 },
    { 'name': 'Фантастические твари и где они обитают', 'money': 3e5 + 5e4 },
    { 'name': 'Тихое место', 'money': 1e5 + 3e3 },
];
// let n;
// let moneyExtra = 0;
// for (n = 0; n < films.length; n++) {
//     const film = films [n]; 
//     moneyExtra += film['money'];
// }
// console.log(moneyExtra);


// for (let n = 1; n < 20000; n=n*2) {
//     console.log(n);
// }

// let n = 0;
// while (2 ** n < 20000) {
//     console.log(n);
//     n++;
// }
// console.log(2**15);

// let i = 5;
// do {
//     console.log('выполнит');
//     i++;
// } while (i < 0);


// const li = [3, 6, 5, 3, 8];
// const ob = { 'a': 3, 'b': 5 }
// for (let n in li) {
//     // console.log(li[n]);
// }

// for (let m of li){
//     // console.log(m);
// }

// for (let k in ob){
//     // console.log(k + ': ' + ob[k]);
// }

// for (let l of 'kjdsfdsrfljdsnf'){
//     // console.log(l);
// }


// let moneyExtra = 0;
// for (let n in films) {
//     const film = films[n];
//     moneyExtra += film['money'];
// }

// let moneyExtra = 0;
// for (let film of films) {
//     moneyExtra += film['money'];
// }

// console.log(moneyExtra);

const origins = {
    'Невероятная жизнь Уолтера Митти': 'США, Великобритания', 'Логан': 'США', 'Гарри Поттер': 'Великобритания, США',
    'Фантастические твари и где они обитают': 'Великобритания, США', 'Тихое место': 'США'
}
let money = 0;

// for (let film of films){
//     film['country'] = origins[film['name']];
// }

films.map(film => film['country'] = origins[film['name']]);
// films.forEach(film => console.log(film));
films.forEach(film => money += film['money']);

// console.log(films);
// console.log(money);


// ---------- ДЗ ----------
// Вывести все числа от 10 000 до 150 000, у которых сумма трех предыдущих элементов при делении на 100 дает остаток 52, вторая цифра — 2.

for (let i = 10003; i <= 150000; i++) {
    let sum = (i - 1) + (i - 2) + (i - 3);
    if (sum % 100 == 52 && String(i)[1] === '2') {
        console.log('number = ' + i);
    }
}


// ---------- How the teacher decided ----------

const goodNumbers = [];
let n = 10000;
while (n < 150000) {
    let sum = 0;
    for (let m of [n - 1, n - 2, n - 3]) {
        sum += m;
    }
    if (sum % 100 === 52) {
        if (String(sum)[1] === '2') {
            goodNumbers.push(n);
        }
    }
    n++;
}
console.log(goodNumbers);