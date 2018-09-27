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
let fedorPoints = 28;
let petrPoints = 20;


// let fedorRemainder = fedorPoints % victoryPoints;
// let petrRemainder = petrPoints % victoryPoints;

// console.log('fedorRemainder ' + fedorRemainder);
// console.log('petrRemainder ' + petrRemainder);

if (fedorPoints > victoryPoints){
	fedorPoints = false
}
if (petrPoints > victoryPoints){
	petrPoints = false
}
if (fedorPoints == false && petrPoints == !false) {
	console.log('Petr')
} else if (fedorPoints == !false && petrPoints == false){
	console.log('Fedor')
}else if (fedorPoints == false && petrPoints == false){
	console.log('Ничья')
}





// fedorPoints > victoryPoints? fedorPoints = false :  fedorRemainder = fedorPoints % victoryPoints;
// petrPoints > victoryPoints? petrPoints = false: petrRemainder = petrPoints % victoryPoints;
// console.log(fedorPoints);
// console.log(fedorRemainder);
// console.log(petrPoints);
// console.log(petrRemainder);




// fedorPoints == false && petrPoints == number? console.log('Petr'):
// fedorPoints == number && petrPoints == false? console.log('Fedor'):
// fedorPoints == false && petrPoints == false? console.log('Ничья'): 
// console.log('Пойдет дальше')





// switch (fedorPoints, petrPoints) {
// 	case fedorPoints > victoryPoints:
// 		fedorPoints = false;

// 	case petrPoints > victoryPoints:
// 		petrPoints = false;

// 	case fedorPoints == false && petrPoints == !false:
// 		console.log('Petr');
// 		break;

// 	case fedorPoints == !false && petrPoints == false:
// 		console.log('Fedor');
// 		break;
		
// 	case fedorPoints == false && petrPoints == false:
// 		console.log('Ничья');
// 		break;
// }




