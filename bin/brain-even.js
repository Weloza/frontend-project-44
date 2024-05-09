#!/usr/bin/env node

import runEngine from '../src/index.js';
import getRandomInRange from '../src/utils.js';

const isEvenRightAnswer = (number) => (((number % 2) === 0) ? 'yes' : 'no');

const getBrainEvenTask = () => {
    const randomNumber = getRandomInRange(0, 100);
    const expression = `${randomNumber}`;
    const rightAnswer = isEvenRightAnswer(randomNumber);
    return [expression, rightAnswer];
};

const runBrainEven = () => {
    const brainEvenQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
    runEngine(brainEvenQuestion, getBrainEvenTask);
};

runBrainEven();

export default runBrainEven;
