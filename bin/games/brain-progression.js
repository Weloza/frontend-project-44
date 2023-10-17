#!/usr/bin/env node

import startMainLogic, { getRandomNumber } from '../../src/index.js';

const getBrainProgressionTask = () => {
    let startNumber = getRandomNumber(5);
    const progressionStep = getRandomNumber(8) + 1;
    const progressionSize = 10;
    const progressionArray = [];
    const secretNumber = '..';
    const secretNumberIndex = getRandomNumber(10);
    let rightAnswer = 0;

    for (let i = 0; i < progressionSize; i += 1) {
        if (i === secretNumberIndex) {
            rightAnswer = startNumber;
            progressionArray.push(secretNumber);
            startNumber += progressionStep;
        } if (i !== secretNumberIndex) {
            progressionArray.push(startNumber);
            startNumber += progressionStep;
        }
    }
    const expression = progressionArray.join(' ');
    return [expression, rightAnswer.toString()];
};

const runBrainProgression = () => {
    const brainProgressionQuestion = 'What number is missing in the progression?';
    startMainLogic(brainProgressionQuestion, getBrainProgressionTask);
};

runBrainProgression();

export default runBrainProgression;
