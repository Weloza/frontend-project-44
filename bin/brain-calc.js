#!/usr/bin/env node

import runEngine from '../src/index.js';
import getRandomInRange from '../src/utils.js';

const calcRightAnswer = (firstNumber, secondNumber, sign) => {
    if (sign === '+') {
        return (firstNumber + secondNumber).toString();
    } if (sign === '-') {
        return (firstNumber - secondNumber).toString();
    } if (sign === '*') {
        return (firstNumber * secondNumber).toString();
    }
    return null;
};

const getBrainCalcTask = () => {
    const firstRandomNumber = getRandomInRange(0, 30);
    const secondRandomNumber = getRandomInRange(0, 30);
    const signs = ['+', '-', '*'];
    const randomSign = signs[getRandomInRange(0, 2)];
    const expression = `${firstRandomNumber} ${randomSign} ${secondRandomNumber}`;
    const rightAnswer = calcRightAnswer(firstRandomNumber, secondRandomNumber, randomSign);
    return [expression, rightAnswer];
};

const runBrainCalc = () => {
    const brainCalcQuestion = 'What is the result of the expression?';
    runEngine(brainCalcQuestion, getBrainCalcTask);
};

runBrainCalc();

export default runBrainCalc;
