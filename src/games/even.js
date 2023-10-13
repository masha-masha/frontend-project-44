import playGame from '../index.js';

import { getNumber } from '../utils.js';
const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const playRound = () => {
    const number = getNumber(0, 50);
    const question = number;
    const isEven = (number) => !(number % 2);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  const brainEven = () => playGame(rulesOfTheGame,playRound);
  export default brainEven;
