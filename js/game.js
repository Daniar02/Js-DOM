// Создаем массив со словами
const words = [
    "программа",
    "макака",
    "прекрасный",
    "оладушек",
    "массив",
    "объект"
];

// //  Выбираем случайный слова
const word = words[Math.floor(Math.random() * words.length)].toLowerCase();
console.log(word);

// // Создадим итоговый массив
const answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

// // Игровой цикл
let remainingLetters = word.length;
while (remainingLetters > 0) {
    // Показываем состояние игры
    alert(answerArray.join(" "));
    // Запрашиваем вариант ответа
    const guess = prompt("Угадайте букву или нажмите отмена для выхода из игры").toLowerCase();
    if (guess === null) {
        // Выходим из игрового цикла
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите только одну букву");
    } else {
        // Обновляем состояние игры
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    // Конец итоговый цикла
    }
}
// Отображаем ответ и поздравляем игрока
alert(answerArray.join(" "));
alert("Отлично! Было загадано слова " + word);

// Делаем генератор дразнилок функцией
function  pickRandomWord(words) {
    return words[Math.floor(Math.random() * words.length)];
}
const generateRandomInsult = function () {
    const randomBodyParts = ["глаз", "нос", "череп"];
    const randomAdjectives = ["вонючая", "унылая", "дурацкая"];
    const randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
    const randomString = "У тебя " + pickRandomWord(randomBodyParts) + " Словно " + pickRandomWord(randomAdjectives) +
        " " + pickRandomWord(randomWords);
    return randomString;
};
console.log(generateRandomInsult());
console.log(generateRandomInsult());
console.log(generateRandomInsult());