const tc = prompt('Введите температуру');
const tf = (9 / 5) * +tc + 32;
alert(tf);

let x = 5;
let y = 7;
console.log('x = ' + x, 'y = ' + y);
x = [y, y = x][0];
console.log('x = ' + x, 'y = ' + y);

let name = "Василй";
let admin = name;
alert(admin);

console.log(1000 + "800"); // 1000800, число приравнивается к строке и строки складываются 

document.write(
    "<H1>Атрибуты тега script</H1>" +
    "<strong>async</strong> - Загружает скрипт асинхронно.<br>" +
    "<strong>defer</strong> - Откладывает выполнение скрипта до тех пор, пока вся страница не будет загружена полностью."
);