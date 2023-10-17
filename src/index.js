/* eslint-disable no-unreachable-loop */
import readlineSync from 'readline-sync';

const startMainLogic = (gameTask, gameConditions) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(gameTask);
    const numberOfRounds = 3;

    for (let i = 0; i < numberOfRounds; i += 1) {
        const [expression, rightAnswer] = gameConditions();
        console.log(`Question: ${expression}`);
        const playerAnswer = readlineSync.question('Your answer: ');
        if (playerAnswer === rightAnswer) {
            console.log('Correct!');
        } else {
            return console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}". 
                \nLet's try again, ${name}!`);
        }
    }
    return console.log(`Congratulations, ${name}!`);
};

export const getRandomNumber = (max) => {
    const randomNumber = Math.floor(Math.random() * max);
    return randomNumber;
};

export default startMainLogic;
