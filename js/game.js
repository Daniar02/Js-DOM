// // Создаем массив со словами
// const words = [
//     "программа",
//     "макака",
//     "прекрасный",
//     "оладушек",
//     "массив",
//     "объект"
// ];
//
// // //  Выбираем случайный слова
// const word = words[Math.floor(Math.random() * words.length)].toLowerCase();
// console.log(word);
//
// // // Создадим итоговый массив
// const answerArray = [];
// for (let i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
// }
//
// // // Игровой цикл
// let remainingLetters = word.length;
// while (remainingLetters > 0) {
//     // Показываем состояние игры
//     alert(answerArray.join(" "));
//     // Запрашиваем вариант ответа
//     const guess = prompt("Угадайте букву или нажмите отмена для выхода из игры").toLowerCase();
//     if (guess === null) {
//         // Выходим из игрового цикла
//         break;
//     } else if (guess.length !== 1) {
//         alert("Пожалуйста, введите только одну букву");
//     } else {
//         // Обновляем состояние игры
//         for (let j = 0; j < word.length; j++) {
//             if (word[j] === guess) {
//                 answerArray[j] = guess;
//                 remainingLetters--;
//             }
//         }
//     // Конец итоговый цикла
//     }
// }
// // Отображаем ответ и поздравляем игрока
// alert(answerArray.join(" "));
// alert("Отлично! Было загадано слова " + word);
//
// // Делаем генератор дразнилок функцией
// function  pickRandomWord(words) {
//     return words[Math.floor(Math.random() * words.length)];
// }
// const generateRandomInsult = function () {
//     const randomBodyParts = ["глаз", "нос", "череп"];
//     const randomAdjectives = ["вонючая", "унылая", "дурацкая"];
//     const randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
//     const randomString = "У тебя " + pickRandomWord(randomBodyParts) + " Словно " + pickRandomWord(randomAdjectives) +
//         " " + pickRandomWord(randomWords);
//     return randomString;
// };
// console.log(generateRandomInsult());
// console.log(generateRandomInsult());
// console.log(generateRandomInsult());
//
// // Пишем игру. Найди клад.
// // Получить случайное число от 0 до size-1
// let getRandomNumber = function(size) {
//     return Math.floor(Math.random() * size);
// };
//
// // Вычислить расстояние от клика (event) до клада (target)
// let getDistance = function (event, target) {
//     let diffX = event.offsetX - target.x;
//     let diffY = event.offsetY - target.y;
//     return Math.sqrt((diffX * diffX) + (diffY * diffY));
// };
//
// // Получить для расстояния строку подсказки
// let getDistanceHint = function (distance) {
//     if (distance < 10) {
//         return "Обожжешься!";
//
//     } else if (distance < 20) {
//         return "Очень горячо";
//
//     } else if (distance < 40) {
//         return "Горячо";
//
//     } else if (distance < 80) {
//         return "Тепло";
//
//     } else if (distance < 160) {
//         return "Холодно";
//
//     } else if (distance < 320) {
//         return "Очень Холодно";
//
//     } else {
//         return "Замерзнешь";
//
//     }
// };
//
// // Создаем переменные
// let width = 400;
// let height = 400;
// let clicks = 0;
//
// // Случайная позиция клада
// let target = {
//     x: getRandomNumber(width),
//     y: getRandomNumber(height)
// };
//
// // Добавляем элементу img обработчик клика
// $("#map").click(function (event) {
//     clicks++;
//     // Получаем расстояние от места клика до клада
//     let distance = getDistance(event, target);
//
// // Преобразуем расстояние в подсказку
//     const distanceHint = getDistanceHint(distance);
//
// // Записываем в элемент #distance Новую подсказку
//     $("#distance").text(distanceHint);
//
// // Если клик был достаточно близко, поздравляем с победой
//     if (distance < 8) {
//         alert("Клад найден! сделано кликов: " + clicks);
//     }
// });

// Хранение информации о фильмах
// const movies = {
//     "В поисках Немо": {
//         releaseDate: 2003,
//         duration: 100,
//         actors: ["Альберт Брукс", "Эллен Дедженерес", "Александр Гоулд"],
//         format: "DVD"
//     },
//     "Звездные войны: Эпизод 6 -- Возвращение джедая": {
//         releaseDate: 1983,
//         duration: 134,
//         actors: ["Марк Хэмилл", "Харрисон Форд", "Кэрри Фишер"],
//         format: "DVD"
//     },
//     "Гарри Поттер и Кубок огня": {
//         releaseDate: 2005,
//         duration: 157,
//         actors: ["Дэниел Рэдклифф", "Эмма Уотсон", "Руперт Грит"],
//         format: "Blu-ray"
//     }
// };
// const cars = {
//     releaseDate: 2006,
//     duration: 117,
//     actors: ["Оуэн Уилсон", "Бонни Хант", "Пол Ньюман"],
//     format: "Blu-ray"
// };
// movies["Тачки"] = cars; // Добавил его в объект movies с ключом "Тачки"
// // console.log(movies);
// console.log(Object.keys(movies));
// // console.log(movies["Гарри Поттер и Кубок огня"].actors[0]);
//