let minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
})



document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;

        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber}?`;
        }
    }
});


document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            gameRun = false;

        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((maxValue + minValue - Math.round(Math.random())) / 2 + 1);
            orderNumber++;

            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber}?`;
        }


    }
});


document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})


document.querySelector('#btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;    

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю.`);

    answerNumber = parseInt(Math.floor((minValue + maxValue) / 2));
    orderNumber = 1;
    const phraseRandom = Math.round(Math.random() * 3);
    const answerPhrase = (phraseRandom === 1) ?
    `Ваще изи! Это : ${answerNumber } Угадал? \n\u{1F60E}` :
    `Это число! ${answerNumber } ? \n\u{1F914}` ;
        answerField.innerText = answerPhrase;
    gameRun = true;

    minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
    minValue = (minValue < 0) ? '0' : minValue;
    

    maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
    maxValue = (maxValue >= 100) ? '100' : maxValue;
})