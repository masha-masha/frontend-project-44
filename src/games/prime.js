import playGame from '../index.js';
import { getNumber } from '../utils.js';
const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const playRound = () => {
  const number = getNumber(0, 1000);
  const question = number;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const brainPrime = () => playGame(rulesOfTheGame, playRound);
export default brainPrime;