/* eslint-disable no-unreachable-loop */
import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const runEngine = (rules, generateRound) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(rules);

    for (let i = 0; i < numberOfRounds; i += 1) {
        const [question, rightAnswer] = generateRound();
        console.log(`Question: ${question}`);
        const playerAnswer = readlineSync.question('Your answer: ');
        if (playerAnswer === rightAnswer) {
            console.log('Correct!');
        } else {
            return console.log(`"${playerAnswer}" is wrong answer ;(. 
                Correct answer was "${rightAnswer}".\nLet's try again, ${name}!`);
        }
    }
    const result = console.log(`Congratulations, ${name}!`);
    return result;
};

export const getRandomNumber = (max) => {
    const randomNumber = Math.floor(Math.random() * max);
    return randomNumber;
};

export default runEngine;
