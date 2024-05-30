import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const isPrime = (number) => {
  let i = 2;
  const limit = Math.sqrt(number);
  if (number < 4) {
    return true;
  } if (number >= 4) {
    while (i <= limit) {
      if ((number % i) === 0) {
        return false;
      }
      i += 1;
    }
  }
  return true;
};

const getBrainPrimeTask = () => {
  const randomNumber = getRandomInRange(0, 100);
  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const expression = `${randomNumber}`;
  return [expression, rightAnswer];
};

const runBrainPrime = () => {
  const brainPrimeQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runEngine(brainPrimeQuestion, getBrainPrimeTask);
};

export default runBrainPrime;
