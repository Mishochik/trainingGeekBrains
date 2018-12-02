const rabbit = {
    'color': 'red',
    'speed': 10,
    'name': 'Вася',
    'getDistance': function (interval) {
        return interval * this.speed;
    }
}

// console.log(rabbit.getDistance(30));


class Bird {
    constructor(speed) {
        this.distance = 0;
        this.speed = speed;
    }
    fly() {
        this.distance += this.speed;
    }
}
const eagle = new Bird(100);
eagle.fly();
const owl = new Bird(20);
owl.fly();

// console.log(eagle.distance);
// console.log(owl.distance);


// function Bird(speed) {
//     this.distance = 0;
//     this.speed = speed;
//     this.fly = function () {
//         this.distance += speed;
//     }
// }

// const eagle = new Bird(100);
// eagle.fly();
// eagle.fly();

// const owl = new Bird(20);
// owl.fly();

// console.log(eagle.distance);
// console.log(owl.distance);


const bird = { 'flies': true };
function Eagle (name) {
    this.name = name;
    this.speed = 100;
} 
Eagle.prototype = bird;

const eagle1 = new Eagle("Akexander");

console.log(eagle1);
console.log(eagle1.flies);

const eagle2 = new Eagle("Martin");
eagle2.flies = false;
console.log(eagle2);
console.log(eagle2.flies);