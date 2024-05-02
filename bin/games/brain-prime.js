#!/usr/bin/env node

import runEngine from '../../src/index.js';
import getRandomInRange from '../../src/utils.js';

const isPrimeRightAnswer = (number) => {
    let i = 2;
    const limit = Math.sqrt(number);
    if (number < 4) {
        return 'yes';
    } if (number >= 4) {
        while (i <= limit) {
            if ((number % i) === 0) {
                return 'no';
            }
            i += 1;
        }
    }
    return 'yes';
};

const getBrainPrimeTask = () => {
    const randomNumber = getRandomInRange(0, 100);
    const rightAnswer = isPrimeRightAnswer(randomNumber);
    const expression = `${randomNumber}`;
    return [expression, rightAnswer];
};

const runBrainPrime = () => {
    const brainPrimeQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    runEngine(brainPrimeQuestion, getBrainPrimeTask);
};

runBrainPrime();

export default runBrainPrime;
