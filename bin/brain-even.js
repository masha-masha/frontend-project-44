#!/usr/bin/env node
import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ')
console.log(`${'Hello, '}${ playerName}${'!'}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const playRound = () => {

  const getNumber = () => Math.round(Math.random() * 100);
  const number = getNumber();

  console.log(`${'Question: '}${number}`);
  const playerAnswer = readlineSync.question('Your answer: ');
  const isEven = (number) => !(number % 2);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  if (playerAnswer === correctAnswer) {
    console.log('Correct!');
    return true;

  } else {
    console.log('Wrong!')
    return false;
  }
};
const playGame = (rounds) => {
  for (let i = 0; i < rounds; i += 1) {
    const isCorrect = playRound();
    if (!isCorrect) {
      console.log('Game is over!')
      return;
    }
  }
  console.log(`${'Congratulations!'}${playerName}`);
};
playGame(3);

