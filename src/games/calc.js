import playGame from '../index.js';
import { getNumber, getIndex } from '../utils.js';
const rulesOfTheGame = 'What is the result of the expression?'

const operators = ['-','+','*'];
const calculate = (x, y, operator) => {
    switch (operator) {
      case '+':
        return x + y;
      case '-':
        return x - y;
      case '*':
        return x * y;
      default:
        throw new Error(`There is no such operator like '${operator}'!`);
    }
  };
  const playRound = () => {
    const number1 = getNumber(0, 50);
    const number2 = getNumber(0, 50);
    const operator = operators[getIndex(operators)];
    const question = `${number1} ${operator} ${number2}`;
    const correctAnswer = calculate(number1, number2, operator).toString();
    return [question, correctAnswer];
  };
  
  const brainCalc = () => playGame(rulesOfTheGame, playRound);
  export default brainCalc;

