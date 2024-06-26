import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getBrainProgressionTask = () => {
  const startNumber = getRandomInRange(0, 5);
  const progressionStep = getRandomInRange(0, 8) + 1;
  const progressionSize = 10;
  const secretNumber = '..';
  const secretNumberIndex = getRandomInRange(0, 9);
  const progression = generateProgression(startNumber, progressionStep, progressionSize);
  const rightAnswer = progression[secretNumberIndex].toString();
  progression[secretNumberIndex] = secretNumber;

  const expression = progression.join(' ');
  return [expression, rightAnswer];
};

const runBrainProgression = () => {
  const brainProgressionQuestion = 'What number is missing in the progression?';
  runEngine(brainProgressionQuestion, getBrainProgressionTask);
};

export default runBrainProgression;
