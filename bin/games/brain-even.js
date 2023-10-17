#!/usr/bin/env node

import startMainLogic, { getRandomNumber } from '../../src/index.js';

const isEvenRightAnswer = (number) => (((number % 2) === 0) ? 'yes' : 'no');

const getBrainEvenTask = () => {
    const randomNumber = getRandomNumber(100);
    const expression = `${randomNumber}`;
    const rightAnswer = isEvenRightAnswer(randomNumber);
    return [expression, rightAnswer];
};

const runBrainEven = () => {
    const brainEvenQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
    startMainLogic(brainEvenQuestion, getBrainEvenTask);
};

runBrainEven();

export default runBrainEven;
