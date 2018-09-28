const tel = '89252346578';

if (tel.length == 11) {
	// console.log('Тест пройден');
	if (tel[0] == '8') {
		// console.log('Тест пройден');
	}
}

if (tel.length == 11 && tel[0] == '8') {
	// console.log('Тест пройден');
} else if (tel.length == 11 && tel[0] == '7') {
	// console.log('Первая цифра 7');
} else {
	// console.log('Тест не пройден');
}

// true && true = true
// true && false  = true
// false && false = false

// true || true = true
// true || false  = true
// false|| false = false

// !(true) = false
// !(false) = true

switch (tel[0]) {
	case '8':
		// console.log('Правельно');
		break;
	case '7':
		// console.log('Вы ввели 7');
		break;
	default:
	// console.log('Неправельно');
}


let success = false;
let error = 'Неизвестная ошибка';
if (tel.length == 11) {
	switch (tel[0]) {
		case '8':
			success = true;
			break;
		case '7':
			error = 'Первая цифра семь';
			break;
	}
}
// console.log(success);
// console.log(error);

const s = success ? 'Тест пройден' : 'Тест не пройден' + error;
// console.log(s);


// ---------- ДЗ ----------
const victoryPoints = 21;
let fedorPoints = 22;
let petrPoints = 19;

if (fedorPoints > victoryPoints) {
	fedorPoints = false;
}
if (petrPoints > victoryPoints) {
	petrPoints = false;
}
fedorPoints === false && petrPoints === false ? console.log('Ничья, оба перебор') :
	fedorPoints > petrPoints ? console.log('Победил Fedor ' + fedorPoints) :
		petrPoints > fedorPoints ? console.log('Победил Petr ' + petrPoints) :
			console.log('Ничья, по ' + fedorPoints);






