#!/usr/bin/env node

import runEngine from '../../src/index.js';
import getRandomInRange from '../../src/utils.js';

const gcdRightAnswer = (firstNumber, secondNumber) => {
    if (secondNumber === 0) {
        return firstNumber;
    }
    return gcdRightAnswer(secondNumber, (firstNumber % secondNumber));
};

const getBrainGcdTask = () => {
    const firstRandomNumber = getRandomInRange(0, 100);
    const secondRandomNumber = getRandomInRange(0, 100);
    const expression = `${firstRandomNumber} ${secondRandomNumber}`;
    const rightAnswer = gcdRightAnswer(firstRandomNumber, secondRandomNumber).toString();
    return [expression, rightAnswer];
};

const runBrainGcd = () => {
    const brainGcdQuestion = 'Find the greatest common divisor of given numbers.';
    runEngine(brainGcdQuestion, getBrainGcdTask);
};

runBrainGcd();

export default runBrainGcd;
