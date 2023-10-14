import playGame from '../index.js';

import { getNumber, getIndex } from '../utils.js';

const rulesOfTheGame = 'What number is missing in the progression?';
const getProgression = (start, length, step) => {
  const progression = [];
  for (let i = start; progression.length < length; i += step) {
    progression.push(i);
  }
  return progression;
};
const playRound = () => {
  const start = getNumber(0, 100);
  const length = getNumber(5, 10);
  const step = getNumber(1, 10);
  const progression = getProgression(start, length, step);
  const indexMissingNumber = getIndex(progression);
  const correctAnswer = progression[indexMissingNumber].toString();
  progression[indexMissingNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
const brainProg = () => playGame(rulesOfTheGame, playRound);
export default brainProg;
