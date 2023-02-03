"use strict";

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length); // (Получить числа атрибута)
// console.log(btns[0].classList.item(0)); // (Получить имя первого атрибута элемента)
// console.log(btns[1].classList.add('red', "jff")); // (добавить определение классы)
// console.log(btns[0].classList.remove('blue')); // (удаляет не нужные классы)
// console.log(btns[0].classList.toggle('blue')); // (удаляет если есть || добавить если нет)

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});

// console.log(btns[0].className);

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.classList.contains('blue')) {
//         console.log("Hello");
//     }
// });

wrapper.addEventListener('click', (event) => {
                                    // matches("button.red")
    if (event.target && event.target.tagName == "BUTTON") {
        console.log("Hello");
    }
});

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });
// });

                //(Создаёть какой то элемент)
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
