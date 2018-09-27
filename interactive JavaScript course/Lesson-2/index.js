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


// ---------- ДЗ ----------
const victoryPoints = 21;
let fedorPoints = 22;
let petrPoints = 19;

if (fedorPoints > victoryPoints) {
	fedorPoints = false
}
if (petrPoints > victoryPoints) {
	petrPoints = false
}
if (fedorPoints > petrPoints){
	console.log(fedorPoints)
	console.log('Fedor')
} else if (petrPoints > fedorPoints) {
	console.log(petrPoints)
	console.log('Petr')
}else if (fedorPoints == petrPoints){
	console.log(fedorPoints)
	console.log(petrPoints)
	console.log('Ничья')
}


