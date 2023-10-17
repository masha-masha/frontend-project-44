import playGame from '../index.js';

import { getNumber, getIndex } from '../utils.js';

const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const getRandomPrime = () => {
  let num = 0;
  while (!isPrime(num)) {
    num = getNumber(0, 10000);
  }
  return num;
};
const playRound = () => {
  const variant = [getNumber(0, 1000), getRandomPrime()];
  const neededNum = variant[getIndex(variant)];
  const question = neededNum;
  const correctAnswer = isPrime(neededNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const brainPrime = () => playGame(rulesOfTheGame, playRound);
export default brainPrime;
