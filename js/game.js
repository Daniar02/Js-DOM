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

// Пишем игру "Змейка": Часть 2.
// Создаем конструктор Block.
// Задаем конструктор Block (ячейка)
const Block = function (col, row) {
    this.col = col;
    this.row = row;
};

// Добавляем метод drawSquare.
// Рисуем квадрат в позиции ячейка
Block.prototype.drawSquare = function (color) {
    const x = this.col * blockSize;
    const y = this.row * blockSize;
    ctx.fillStyle = color;
    ctx.fillRect( x, y, blockSize, blockSize);
};

// Добавляем метод drawCircle.
// Рисуем круг в позиции ячейка
Block.prototype.drawCircle = function (color) {
    const centerX = this.col * blockSize + blockSize / 2;
    const centerY = this.row * blockSize + blockSize / 2;
    ctx.fillStyle = color;
    circle(centerX, centerY, blockSize / 2, true);

};

// Добавляем метод equal.
// Проверяем, находится ли эта ячейка в той же позиции, что и ячейка otherBlock
Block.prototype.equal = function (otherBlock) {
    return this.col === otherBlock.col && this.row === otherBlock.row;
};

// Создаем змейку.
// Пишем конструктор Snake.
// Задаем конструктор Snake (змейка)
const Snake = function () {
    this.segments = [
        new Block(7, 5),
        new Block(6, 5),
        new Block(5, 5)
    ];

    this.direction = "right";
    this.nextDirection = "right";
};

// Рисуем змейку.
// Рисуем квадратик для каждого сегмента тела змейки
Snake.prototype.draw = function () {
    for (let i = 0; i < this.segments.length; i++) {
        this.segments[i].drawSquare("Blue");
    }
};

// const snake = new Snake();
// snake.draw();

// Добавляем метод move.
// Создаем новую голову и добавляем ее к началу змейки, чтобы передвинуть змейку в текущем направлении
Snake.prototype.move = function () {
    let head = this.segments[0];
    let newHead;

    this.direction = this.nextDirection;

    if (this.direction === "right") {
        newHead = new Block(head.col + 1, head.row);

    } else if (this.direction === "down") {
        newHead = new Block(head.col, head.row + 1);

    } else if (this.direction === "left") {
        newHead = new Block(head.col - 1, head.row);

    } else if (this.direction === "up") {
        newHead = new Block(head.col, head.row - 1);

    }

    if (this.checkCollision(newHead)) {
        gameOver();
        return;
    }

    this.segments.unshift(newHead);

    if (newHead.equal(apple.position)) {
        score++;
        apple.move();
    } else {
        this.segments.pop();
    }
};

// Добавляем метод checkCollision
// Проверяем, не столкнулась ли змейка со стеной или собственным телом
Snake.prototype.checkCollision = function (head) {
    const leftCollision = (head.col === 0);
    const topCollision = (head.row === 0);
    const rightCollision = (head.col === widthInBlocks - 1);
    const bottomCollision = (head.row === heightInBlocks - 1);

    const wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;

    let selfCollision = false;

    for (let i = 0; i < this.segments.length; i++) {
        if (head.equal(this.segments[i])) {
            selfCollision = true;
        }
    }
    return wallCollision || selfCollision;
};

// Создаем метод setDirection.
// Задаем следующее направление движения змейки на основе нажатой клавиши
Snake.prototype.setDirection = function (newDirection) {
    if (this.direction === "up" && newDirection === "down") {
        return;

    } else if (this.direction === "right" && newDirection === "left") {
        return;
    } else if (this.direction === "down" && newDirection === "up") {
        return;
    } else if (this.direction === "left" && newDirection === "right") {
        return;
    }
    this.nextDirection = newDirection;
};

// Пишем конструктор Apple.
// Задаем конструктор Apple (яблоко)
let Apple = function () {
    this.position = new Block(10, 10);
};

// Рисуем яблоко.
// Рисуем кружок в позиции яблоко
Apple.prototype.draw = function () {
    this.position.drawCircle("LimeGreen");
};
// const apple = new Apple();
// apple.draw();

// Перемещаем яблоко в случайную позицию
Apple.prototype.move = function () {
    const randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
    const randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
    this.position = new Block(randomCol, randomRow);
};

// Создаем объект-змейку и объект-яблоко
const snake = new Snake();
const apple = new Apple();

// Использование setInterval анимации в игре.
// Запускаем функцию анимации через setInterval
const intervalId = setInterval(function () {
    ctx.clearRect(0, 0, width, height);
    drawScore();
    snake.move();
    snake.draw();
    apple.draw();
    drawBorder();
}, 100);

// Обработчик события keydown.
// Преобразуем коды клавиш в направления
const directions = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
};

// Задаем обработчик события keydown (клавиши-стрелки)
$("body").keydown(function (event) {
    const newDirection = directions[event.keyCode];
    if (newDirection !== undefined) {
        snake.setDirection(newDirection);
    }
});