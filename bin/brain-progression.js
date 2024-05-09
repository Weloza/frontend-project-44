#!/usr/bin/env node

import runEngine from '../src/index.js';
import getRandomInRange from '../src/utils.js';

const getBrainProgressionTask = () => {
    let startNumber = getRandomInRange(0, 5);
    const progressionStep = getRandomInRange(0, 8) + 1;
    const progressionSize = 10;
    const progressionArray = [];
    const secretNumber = '..';
    const secretNumberIndex = getRandomInRange(0, 10);
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
    runEngine(brainProgressionQuestion, getBrainProgressionTask);
};

runBrainProgression();

export default runBrainProgression;
