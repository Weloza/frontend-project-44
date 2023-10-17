#!/usr/bin/env node

import startMainLogic, { getRandomNumber } from '../src/index.js';

const gcdRightAnswer = (firstNumber, secondNumber) => {
    if (secondNumber === 0) {
        return firstNumber;
    }
    return gcdRightAnswer(secondNumber, (firstNumber % secondNumber));
};

const getBrainGcdTask = () => {
    const firstRandomNumber = getRandomNumber(100);
    const secondRandomNumber = getRandomNumber(100);
    const expression = `${firstRandomNumber} ${secondRandomNumber}`;
    const rightAnswer = gcdRightAnswer(firstRandomNumber, secondRandomNumber).toString();
    return [expression, rightAnswer];
};

const runBrainGcd = () => {
    const brainGcdQuestion = 'Find the greatest common divisor of given numbers.';
    startMainLogic(brainGcdQuestion, getBrainGcdTask);
};

runBrainGcd();

export default runBrainGcd;
