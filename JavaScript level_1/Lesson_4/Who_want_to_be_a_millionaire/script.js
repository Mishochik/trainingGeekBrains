const money = [100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 10000000];
// money[4] 1000 и money[9] 32000 - несгораемая сумма

const start = confirm('Для того, чтобы заработать 1 миллион рублей, необходимо правильно ответить на 15 вопросов из различных областей знаний. Каждый вопрос имеет 4 варианта ответа, из которых только один является верным.');
if (start) {
    for (let i = 0; i < 15; i++) {
        console.log(i);// удалить до релиза
        console.log(money[i]);// удалить до релиза
        console.log(structure[i].answer);// удалить до релиза
        if (i === 0) {
            var userResponse = prompt(`На вашем счету 0 рублей.\nВопрос на ${money[i]} рублей:\n${structure[i].question}\nВарианты ответов:\n  a: ${structure[i].a}\n  b: ${structure[i].b}\n  c: ${structure[i].c}\n  d: ${structure[i].d}\nВведите "stop" чтобы закончить игру и забрать выйгрыш`, '');
        } else if (i === 4) {
            var userResponse = prompt(`На вашем счету ${money[i - 1]} рублей - несгораемая сумма.\nВопрос на ${money[i]} рублей:\n${structure[i].question}\nВарианты ответов:\n  a: ${structure[i].a}\n  b: ${structure[i].b}\n  c: ${structure[i].c}\n  d: ${structure[i].d}\nВведите "stop" чтобы закончить игру и забрать выйгрыш`, '');
        } else if (i === 0) {
            var userResponse = prompt(`На вашем счету ${money[i - 1]} рублей - несгораемая сумма.\nВопрос на ${money[i]} рублей:\n${structure[i].question}\nВарианты ответов:\n  a: ${structure[i].a}\n  b: ${structure[i].b}\n  c: ${structure[i].c}\n  d: ${structure[i].d}\nВведите "stop" чтобы закончить игру и забрать выйгрыш`, '');
        } else {
            var userResponse = prompt(`На вашем счету ${money[i - 1]} рублей.\nВопрос на ${money[i]} рублей:\n${structure[i].question}\nВарианты ответов:\n  a: ${structure[i].a}\n  b: ${structure[i].b}\n  c: ${structure[i].c}\n  d: ${structure[i].d}\nВведите "stop" чтобы закончить игру и забрать выйгрыш`, '');
        }
        if (userResponse === null) {
            console.log('Сдался');
            break;
        } else if (userResponse === 'stop') {
            alert(`Ваш выйгрыш: ${money[i - 1]} рублей.`);
            break;
        } else if (userResponse !== structure[i].answer) {
            if (i > 4 && i < 9) {
                alert(`Ваш выйгрыш: ${money[4]} рублей.`);
                break;
            } else if (i > 9) {
                alert(`Ваш выйгрыш: ${money[9]} рублей.`);
                break;
            } else {
                alert('Вы ничего не выйграли');
                break;
            }

        } else if (i === 14) {
            alert(`Победа!!!\n Вы выйглали ${money[14]} рублей`);
        }
    }
}