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

const now = new Date();

console.log(now.setHours(19));
console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);