import playGame from '../index.js';

import { getNumber } from '../utils.js';

const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : b);

const playRound = () => {
  const number1 = getNumber(0, 50);
  const number2 = getNumber(0, 50);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2).toString();
  return [question, correctAnswer];
};
const brainGcd = () => playGame(rulesOfTheGame, playRound);
export default brainGcd;
