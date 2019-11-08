'use strict';

var userName = prompt('Hello, what is your name?');
// console.log('User name : ', userName);

alert('Hello, pleasure to meet you, ' + userName + '!');

var totalCorrectAnswerNum = 0;

// eslint-disable-next-line no-unused-vars
function guessingGame() {
  var correctAnswer = 0;

  var fromCalifornia = prompt('Is Crystal from California?');
  fromCalifornia = fromCalifornia.toLowerCase();
  // console.log('User answered : ', fromCalifornia);
  if (fromCalifornia === null || fromCalifornia === '') {
    // console.log('User cancelled the prompt.');
  } else if (fromCalifornia === 'no' || fromCalifornia === 'n') {
    // console.log('User answered correctly.')
    correctAnswer += 1;
    alert('You got it! Crystal is not from California.');
  } else if (fromCalifornia === 'yes' || fromCalifornia === 'y') {
    // console.log('Wrong answer.');
    alert('Wrong! She is from here, Seattle.');
  } else {
    console.log('Not an option.');
  }

  var twoDegrees = prompt('Does Crystal have two bachelor\'s degree?');
  twoDegrees = twoDegrees.toLowerCase();
  // console.log('User answered : ', twoDegrees);
  if (twoDegrees === null || twoDegrees === '') {
    console.log('User cancelled the prompt.');
  } else if (twoDegrees === 'yes' || twoDegrees === 'y') {
    // console.log('User answered correctly.')
    correctAnswer += 1;
    alert('Yes, she has BA and BS.');
  } else if (twoDegrees === 'no' || twoDegrees === 'n') {
    // console.log('Wrong answer.');
    alert('Wrong! She has two bachelor\'s degree.');
  } else {
    console.log('Not an option.');
  }

  var likeCoffee = prompt('Do you think Crystal likes to drink coffee?');
  likeCoffee = likeCoffee.toLowerCase();
  // console.log('User answered : ', likeCoffee);
  if (likeCoffee === null || likeCoffee === '') {
    console.log('User cancelled the prompt.');
  } else if (likeCoffee === 'yes' || likeCoffee === 'y') {
    console.log('User answered correctly.');
    correctAnswer += 1;
    alert('Great! You got it. She is a coffee lover.');
  } else if (likeCoffee === 'no' || likeCoffee === 'n') {
    console.log('Wrong answer.');
    alert('Wrong! she is a coffee lover');
  } else {
    console.log('Not an option.');
  }

  var likeSports = prompt('Do you think Crystal likes to play sports?');
  likeSports = likeSports.toLowerCase();
  // console.log('User answered : ', likeSports);
  if (likeSports === null || likeSports === '') {
    console.log('User cancelled the prompt.');
  } else if (likeSports === 'yes' || likeSports === 'y') {
    // console.log('User answered correctly.')
    correctAnswer += 1;
    alert('Yes, she like to play sports.');
  } else if (likeSports === 'no' || likeSports === 'n') {
    // console.log('Wrong answer.');
    alert('Wrong! She does tennis, yoga and run.');
  } else {
    console.log('Not an option.');
  }

  var workedMicrosoft = prompt('Did Crystal work for Microsoft?');
  workedMicrosoft = workedMicrosoft.toLowerCase();
  console.log('User answered : ', workedMicrosoft);
  if (workedMicrosoft === null || workedMicrosoft === '') {
    console.log('User cancelled the prompt.');
  } else if (workedMicrosoft === 'no' || workedMicrosoft === 'n') {
    // console.log('User answered correctly.')
    correctAnswer += 1;
    alert('No she worked at a start-up company.');
  } else if (workedMicrosoft === 'yes' || workedMicrosoft === 'y') {
    // console.log('Wrong answer.');
    alert('Wrong! She wants to work at Microsoft.');
  } else {
    console.log('Not an option.');
  }

  alert(userName + ' got total of ' + correctAnswer + ' answers right!' );
  document.getElementById('correctAnswerNum').innerHTML = correctAnswer + '/5';
  totalCorrectAnswerNum += correctAnswer;
}

// eslint-disable-next-line no-unused-vars
function guessMyFavNum() {
  var allowedAttempts = 4;
  var myNum = '4';

  do {
    var userAnswer = prompt('What is my favorite number? Choose 1 - 10. Use only Arabic numerals!');
    if (userAnswer === myNum) {
      alert('You got it!');
      totalCorrectAnswerNum++;
      break;
    }
    else if (userAnswer === null || userAnswer === '') {
      alert('No input. It counts as a wrong answer.');
      allowedAttempts -= 1;
    }
    else if (userAnswer > myNum) {
      alert('Wrong. It\'s too high. Try again.');
      allowedAttempts -= 1;
    }
    else if (userAnswer < myNum) {
      alert('Wrong. It\'s too low. Try again.');
      allowedAttempts -= 1;
    }
    if (allowedAttempts === 0) {
      alert('You used all your chances...');
    }
  } while (allowedAttempts !== 0);
}

// eslint-disable-next-line no-unused-vars
function guessMyCoffee() {
  var allowedAttempts = 6;
  var coffees = ['americano', 'drip', 'macchiato', 'cold brew'];

  while (allowedAttempts > 0) {
    var flag = false;
    for (var i = 0; i < coffees.length; i++) {
      var userAnswer = prompt('What would be my go to coffee drink?');
      userAnswer = userAnswer.toLowerCase();
      if (coffees[i] === userAnswer) {
        alert('Yes, ' + coffees[i] + ' is my go to coffee drink.');
        totalCorrectAnswerNum++;
        flag = true;
        break;
      }
      else if (coffees[i] !== userAnswer) {
        alert('Wrong answer. You got ' + (allowedAttempts-1) + ' attempts left');
        break;
      }
    }
    allowedAttempts--;
    if (allowedAttempts === 0) {
      alert('You used all your chances...');
      alert('The answer was either americano or drip or macchiato or cold brew');
    }
    if (flag === true) {
      break;
    }
  }
  document.getElementById('totatlCorrectAnswerNum').innerHTML = 'The Total Correct Answer : ' + totalCorrectAnswerNum + '/7';
}
