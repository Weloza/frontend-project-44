#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May i have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    return randomNumber;
};

const isEven = (number) => (((number % 2) === 0) ? 'yes' : 'no');

const gameBrainEven = () => {
    for (let i = 0; i < 3; i += 1) {
        const randomNumber = getRandomNumber();
        console.log('Question: ', randomNumber);
        const playerAnswer = readlineSync.question('Your answer: ');
        const rightAnswer = isEven(randomNumber);
        if (playerAnswer === rightAnswer) {
            console.log('Correct!');
        } if (playerAnswer !== rightAnswer) {
            return console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${name}!`);
        }
    }
    return console.log(`Congratulations, ${name}!`);
};

gameBrainEven();

export default isEven;
