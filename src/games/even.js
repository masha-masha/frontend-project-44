import playGame from '../index.js';
import { getNumber, getIndex } from '../utils.js';
const rulesOfTheGame = 'What is the result of the expression?';
const playRound = () => {
    const number = getNumber();
    const question = number;
    const isEven = (number) => !(number % 2);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  const brainEven = () => playGame(rulesOfTheGame,playRound);
  export default brainEven;
