const title = 'Логан';
const title2 = title.toUpperCase();
// const letter = title.startsWith('Л');
const letter = title.endsWith('н');
// const title3 = title.replace('а','о');
const aPosition = title.search('а');
const fitstLetter = title[0];
const secondLetter = title[1];
const subTitle = title.substring(0, 3);
const length = title.length;
const lastLetter = title[length - 1];
const message = title + ' - ркутой фильм!';

const films = ['Невероятная жизнь Уолтера Митти', 'Логан'];
films.push('Гарри Поттер', 'Фантастические твари и где они обитают', 'Смешарики');
films.pop();
films.unshift('Смешарики');
films.shift();
films[1] = 'Война миров';
films.push(title);
films.sort();
films.reverse();
films.splice(3, 1, 'Вверх');
let films2 = ['Тихое место'];
films2 = films2.concat(films);
const string2 = films2.join('; ');
const string = 'У нас есть фильмы: ' + string2;
const films3 = string2.split(';');

// console.log(films3);

const film1 = {
	'name': "Тихое место",
	'money': 2e6
};
const film2 = {
	'name': "Фантастические твари и где они обитают",
	'money': 8e6
};
const films4 = [];
films4.push(film1, film2);

// console.log(films4[0].name);
// console.log(films4[0].money + films4[1].money);

// console.log(typeof films4);


// ---------- ДЗ ----------
const a = 13;
let s = 'м';
s = s + a;
let b = 1e3;
b = b + 1;
b += 1;
b = ++b;
let li = [1, 2, 3, 4, 5, 6, 7, 8];
li.splice(3, 3);
li.push(10, 5e6);
const ob = {
	'numbers': ''
};
const liString = li.join('; ');
ob.numbers = liString;
li.push(li[4], li[4]);
const liString1 = li.join('; ');
ob.newNumbers = liString1;

console.log(ob);


// 57 line: let -- const
// 59 line: 5e6 -- 5e9
// 63 - 64 lines:
// ob.numbers = li.join('; ');
// 65 - 67 lines:
// ob['newNumbers'] = li.concat([li[4], li[4]]).join('; ');