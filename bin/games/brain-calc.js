#!/usr/bin/env node

import startMainLogic, { getRandomNumber } from '../../src/index.js';

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
    const firstRandomNumber = getRandomNumber(30);
    const secondRandomNumber = getRandomNumber(30);
    const signs = ['+', '-', '*'];
    const randomSign = signs[getRandomNumber(3)];
    const expression = `${firstRandomNumber} ${randomSign} ${secondRandomNumber}`;
    const rightAnswer = calcRightAnswer(firstRandomNumber, secondRandomNumber, randomSign);
    return [expression, rightAnswer];
};

const runBrainCalc = () => {
    const brainCalcQuestion = 'What is the result of the expression?';
    startMainLogic(brainCalcQuestion, getBrainCalcTask);
};

runBrainCalc();

export default runBrainCalc;
