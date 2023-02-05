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
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, Цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

div.showMyProps();
console.log(div.calcArea);

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(long.calcArea());
// console.log(square.calcArea());