import playGame from '../index.js';

import { getNumber } from '../utils.js';

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => !(number % 2);
const playRound = () => {
  const num = getNumber(0, 50);
  const question = num;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const brainEven = () => playGame(rulesOfTheGame, playRound);
export default brainEven;
