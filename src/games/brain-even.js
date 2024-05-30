import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const isEven = (number) => (number % 2) === 0;

const getBrainEvenTask = () => {
  const randomNumber = getRandomInRange(0, 100);
  const expression = `${randomNumber}`;
  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [expression, rightAnswer];
};

const runBrainEven = () => {
  const brainEvenQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(brainEvenQuestion, getBrainEvenTask);
};

export default runBrainEven;
