"use strict";

// const btns = document.querySelectorAll('button'),
//       wrapper = document.querySelector('.btn-block');

// // console.log(btns[0].classList.length); // (Получить числа атрибута)
// // console.log(btns[0].classList.item(0)); // (Получить имя первого атрибута элемента)
// // console.log(btns[1].classList.add('red', "jff")); // (добавить определение классы)
// // console.log(btns[0].classList.remove('blue')); // (удаляет не нужные классы)
// // console.log(btns[0].classList.toggle('blue')); // (удаляет если есть || добавить если нет)

// // if (btns[1].classList.contains('red')) {
// //     console.log('red');
// // }

// btns[0].addEventListener('click', () => {
//     // if (!btns[1].classList.contains('red')) {
//     //     btns[1].classList.add('red');
//     // } else {
//     //     btns[1].classList.remove('red');
//     // }

//     btns[1].classList.toggle('red');
// });

// // console.log(btns[0].className);

// // wrapper.addEventListener('click', (event) => {
// //     if (event.target && event.target.classList.contains('blue')) {
// //         console.log("Hello");
// //     }
// // });

// wrapper.addEventListener('click', (event) => {
//                                     // matches("button.red")
//     if (event.target && event.target.tagName == "BUTTON") {
//         console.log("Hello");
//     }
// });

// // btns.forEach(btn => {
// //     btn.addEventListener('click', () => {
// //         console.log('Hello');
// //     });
// // });

//                 //(Создаёть какой то элемент)
// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);

/*######################## Скрипты и время их выполнения. setTimeout и setInterval ######################## */
// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     }
// }

// btn.addEventListener('click', myAnimation);

// // const timerId = setTimeout(function(text) {
// //     console.log(text);
// // }, 2000, 'Hello');

// // function logger() {
// //     if (i === 3) {
// //         clearInterval(timerId);
// //     }
// //     console.log('text');
// //     i++;
// // }

// // var id = setTimeout(function log() {
// //     console.log('Hello');
// //     id = setTimeout(log, 500);
// // }, 500);

/*################################### Работа с датами ################################### */

// const now = new Date();

// console.log(now.setHours(19));
// console.log(now);

// // console.log(now.getFullYear());
// // console.log(now.getMonth());
// // console.log(now.getDate());
// // console.log(now.getDay());
// // console.log(now.getHours());
// // console.log(now.getUTCHours());

// // console.log(now.getTimezoneOffset());
// // console.log(now.getTime());

// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//     let some = i ** 3;
// }

// let end = new Date();

// alert(`Цикл отработал за ${end - start} миллисекунд`);

/*###################################  Параметры документа, окна и работа с ними. ################################### */

// const box = document.querySelector('.box'),
//       btn = document.querySelector('button');

// // const width = box.clientWidth;
// // const height = box.clientHeight;
// // const width = box.offsetWidth;
// // const height = box.offsetHeight;
// const width = box.scrollWidth;
// const height = box.scrollHeight;

// console.log(width, height);

// btn.addEventListener('click', () => {
//     box.style.height = box.scrollHeight + 'px';
//     console.log(box.scrollTop);
// });

// console.log(box.getBoundingClientRect().top);

// const style = window.getComputedStyle(box);

// console.log(style.display);

// console.log(document.documentElement.scrollTop);

/*################################### Функции-конструкторы ################################### */
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`hello ${this.name}`);
//     };
// }

// User.prototype.exit = function() {
//     console.log(`Пользователь ${this.name} ушел`);
// };

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);

// ivan.hello();
// alex.hello();

// ivan.exit();
// alex.exit();

// console.log(ivan);
// console.log(alex);

/*################################### Контекст вызова. This ################################### */

// function showThis(a, b) {
//     console.log(this);

//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };

// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }

// let ivan = new User('Ivan', 23);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'john'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// 1) Обычная функция: this = window, но если use strict - undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

// const btn = document.querySelector('button');

// btn.addEventListener('click', (e) => {
//     e.target.style.backgroundColor = 'red';
// });

// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this.num);
//         }; 
//         say();
//     }
// };
// obj.sayNumber();

// const double = (a) => {
//     return a * 2;
// };
// console.log(double(2));

/*################################### Классы (ES6) ################################### */
// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }

// class ColoredRectangleWithText extends Rectangle {
//     constructor(height, width, text, bgColor) {
//         super(height, width);
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProps() {
//         console.log(`Текст: ${this.text}, Цвет: ${this.bgColor}`);
//     }
// }

// const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

// div.showMyProps();
// console.log(div.calcArea);

// // const square = new Rectangle(10, 10);
// // const long = new Rectangle(20, 100);

// // console.log(long.calcArea());
// // console.log(square.calcArea());

/*################################### Задачи 01 ################################### */
// function num(c) {
//      return c.length >= 6 ? true : false;
//
// }
// console.log(num('aj'));

// const whitespace = ' '.split('');
// function firstWord(text){
//     for(var chr, result = '', i = 0; i < text.length; i++){
//         chr = text.charAt(i);
//         if (whitespace.includes(chr.toLowerCase()))
//             break;
//          else
//             result += chr;
//     }
//     return result;
// }
// console.log(firstWord("Nuraultan Daniar"));

// function revString(a) {
//     return a.split('').reverse().join("");
// }
// console.log(revString('Hello World'));

// function getlength(number) {
//     return number.toString().length;
//   }
//   console.log(getlength(100));

// function isAllUpper(a) {
//     if (a === a.toUpperCase() && a === " ") {
//         console.log(true);
//     } else if(a === a.toLowerCase()) {
//         console.log(false);
//     }

// }
// isAllUpper('');


// function isAllUpper(text) {
//     if (text === text.toUpperCase() || text === ""  || text === " "){
//         return true;
//     } else {
//         return false;
//     }
// }

// function betweenMarkers(text, begin, end) {
//     return text.slice(text.indexOf(begin) + 1, text.indexOf(end));
//   }

// function firstWord(world) {
//     // const worlds = world.split(' ');
//     // const first = worlds.slice(0,1);
//     // if (first[0] === '') {
//     //
//     // }
//     // console.log();
//
//     return world.split(' ').slice(0,1)[0];
// }
//
// console.log(firstWord('Hello world'));

/*################################### Основы ################################### */

// 1 Переменные
// camelCase
// const firstName = 'Vladilen'
// // const age = 26 // number
// const isProgrammer = true // boolean

// const _ = 'private'
// const $ = 'some value'

// const if = 'mkef' // err
// const withNum5 = '5'
// const 5withNum = 5 // err

// 2 Мутирование
// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы
// let currentYear = 2020
// const birthYear = 1993
//
// // const age = currentYear + birthYear
//
// const a = 10
// const b = 5
//
// let c = 32
// c = c + a
// c = c - a
// c = c * a
// c = c / a
// c += a
// c -= a
// c *= a
// c /= a
//
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)

// 4 Типы данных
// const isProgrammer = true
// const name = 'Vladilen'
// const age = 26
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// 5 Приоритет операторов
// const fullAge = 26
// const birthYear = 1993
// const currentYear = 2020

// > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge // 26 >= 27 => true
// console.log(isFullAge)

// 6 Условные опрераторы
// const courseStatus = 'fail' // ready, fail, pending
//
// if (courseStatus === 'ready') {
//   console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//   console.log('Курс пока находится в процессе разработки')
// } else {
//   console.log('Курс не получился')
// }

// const isReady = true

// if (isReady) {
//   console.log('Все готово!')
// } else {
//   console.log('Все не готово!')
// }

// Тернарное выражение
// isReady ? console.log('Все готово!') : console.log('Все не готово!')

// const num1 = 42 // number
// const num2 = '42' // string
//
// console.log(num1 === num2)

// 7 Булевая логика
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

// 8 Функции

// function calculateAge(year) {
//   return 2020 - year
// }
//
// // console.log(calculateAge(1993))
// // console.log(calculateAge(2019))
// // console.log(calculateAge(1999))
//
// function logInfoAbout(name, year) {
//   const age = calculateAge(year)
//
//   if (age > 0) {
//     console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//   } else {
//     console.log('Вообще-то это уже будущее!')
//   }
//
// }
//
// logInfoAbout('Владилен', 1993)
// logInfoAbout('Елена', 1995)
// logInfoAbout('Елена', 2022)

// 9 Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд']
// const cars = new Array('Мазда', 'Мерседес', 'Форд')
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])
//
// cars[0] = 'Porsche'
// cars[cars.length] = 'Mazda'
// console.log(cars)

// 10 Циклы
// const cars = ['Мазда', 'Мерседес', 'Форд', 'Porsche']

// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i]
//   console.log(car)
// }

// for (let car of cars) {
//   console.log(car)
// }

// 11 Объекты
// const person = {
//     firstName: 'Vladilen',
//     lastName: 'Minin',
//     year: 1993,
//     languages: ['Ru', 'En', 'De'],
//     hasWife: false,
//     greet: function() {
//       console.log('greet from person')
//     }
//   }
  
//   console.log(person.firstName)
//   console.log(person['lastName'])
//   const key = 'year'
//   console.log(person[key])
//   person.hasWife = true
//   person.isProgrammer = true
//   console.log(person)
  
//   person.greet()

/*################################### Числа + BigInt ################################### */


// 1 Number
// const num = 42 // integer
// const float = 42.42 // float
// const pow = 10e3
//
// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 53', Math.pow(2, 53) - 1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MIN_VALUE', Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('2 / 0', 2 / 0)
// console.log(Number.NaN) // Not A Number
// console.log(typeof NaN)
// const weird = 2 / undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(42))
// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(42))
//
// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2)
// console.log(parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)
// console.log(parseFloat(stringFloat) + 2)
// console.log(+stringFloat + 2)

// console.log(0.4 + 0.2) // 0.6
// console.log(+(0.4 + 0.2).toFixed(1))
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))

// 2 BigInt
// console.log(90071992547409919999999n - 9007199254740991999999n)
// console.log(-90071992547409919999999n)
// console.log(90071992547409919999999.23231n) // error

// console.log(10n - 4) // error
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n) // 2n

// 3 Math
// console.log(Math.E)
// console.log(Math.PI)
//
// console.log(Math.sqrt(25))
// console.log(Math.pow(5, 3))
// console.log(Math.abs(-42))
// console.log(Math.max(42, 12, 23, 11, 422))
// console.log(Math.min(42, 12, 23, 11, 422))
// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.9))
// console.log(Math.round(4.4))
// console.log(Math.trunc(4.9))
// console.log(Math.random())

// 4 Example
// function getRandomBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
//
//   console.log(getRandomBetween(10, 42));

// ############################ Работа с DOM ############################

const btn = document.querySelector("button"),
    btn2 = document.querySelector(".btn2"),
    btn3 = document.querySelector(".btn3");

setTimeout(() => {
    addStylesTo(btn, "JavaScript", "yellow",  "black", );
},1500);

setTimeout(() => {
    addStylesTo(btn2, "Практикуйся", "yellow", "red");
},2500);

setTimeout(() => {
    addStylesTo(btn3, "И все получиться", 'blue', "yellow", "14px");
},3500);

function  addStylesTo(node, text, color, bg, fontSize) {
    node.textContent = text;
    node.style.color = color;
    node.style.textAlign = "center";
    node.style.backgroundColor = bg;
    if (fontSize) {
        node.style.fontSize = fontSize;
    }
}
btn.addEventListener("click", () => {
    if (btn.style.color === "red") {
        btn.style.color = "#000";
        btn.style.background = "#fff";
    } else {
        btn.style.color = "red";
        btn.style.background = "#000";
    }
});
btn2.addEventListener("dblclick", () => {
    if (btn2.style.color === "red") {
        btn2.style.color = "#000";
        btn2.style.background = "#fff";
    } else {
        btn2.style.color = "red";
        btn2.style.background = "#000";
    }
});



















