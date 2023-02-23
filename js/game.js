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


// Пишем игру "Змейка": Часть 1
// Структура игры "Псевдокод"
/*
    Настроить "холст"
    Установить счет игры в 0.
    Создать змейку.
    Создать яблоко.
    Каждые 1000 миллисекунд {
        Очистить "холст"
        Напечатать текущий счет игры.
        Сдвинуть змейку в текущий направлении
        Если змейка столкнулась со стеной или своим хвостом {
            Закончить игру.
        } Иначе Если змейка съела яблоко {
            Увеличить счет на 1.
            Переместить яблоко на новое место.
            Увеличить длину змейка
        }
        Для каждого сегмента тело змейки {
            Нарисовать сегмент.
        }
        Нарисовать яблоко.
        Нарисовать рамку
    }
    Когда игрок нажмет клавишу {
        Если это клавиша-стрелка {
            Обновить направление движения змейки
        }
    }
*/

// Определяем переменные canvas, ctx, width и height
// Настройки "холста"
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Получаем ширину и высоту элемента canvas
const width = canvas.width;
const height = canvas.height;

// Делим "холст" на ячейки.
// Вычисляем ширину и высоту в ячейках
const blockSize = 10;
const widthInBlocks = width / blockSize;
const heightInBlocks = height / blockSize;

// Переменный score.
// Устанавливаем счет 0
let score = 0;

// Рисуем рамку
const drawBorder = function () {
    ctx.fillStyle = "Gray";
    ctx.fillRect(0, 0, width, blockSize); // Верхнюю часть рамки
    ctx.fillRect(0, height - blockSize, width, blockSize); // Нижнюю часть рамки 400-10=390
    ctx.fillRect(0, 0, blockSize, height); // Левую часть рамки
    ctx.fillRect(width - blockSize, 0, blockSize, height); // правую часть рамки 400-10=390

    // // Задаем размер и шрифт
    // ctx.textBaseline = "top";
    // ctx.fillText("Привет, мир!", 50, 50);
    //
    // ctx.font = "20px Courier";
    // ctx.fillText("Courier", 50, 70);
    //
    // ctx.font = "24px Comic Sans MS";
    // ctx.fillText("Comic Sans", 50, 100);
    //
    // ctx.font = "18px Arial";
    // ctx.fillText("Arial", 50, 150);
};

// Пишем функцию drawScore.
// Выводим счет игры в левом верхнем углу
const drawScore = function () {
    ctx.font = "20px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Счет: " + score, blockSize, blockSize);
};

// Конец игры.
// Отменяем действие setInterval и печатаем сообщение "Конец игры"
const gameOver = function () {
    clearInterval(intervalId);
    ctx.font = "60px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Конец игры", width / 2, height / 2);
};

// Рисуем окружность (используя функция из главы 14)
const circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();

    } else {
        ctx.stroke();
    }
};