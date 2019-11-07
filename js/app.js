'use strict';

var userName = prompt('Hello, what is your name?');
// console.log('User name : ', userName);

alert('Nice to meet you, ' + userName + '!');

// eslint-disable-next-line no-unused-vars
function guessingGame() {
  var correctAnswer = 0;

  var fromCalifornia = prompt('Is Crystal from California?');
  fromCalifornia = fromCalifornia.toLocaleLowerCase();
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
  twoDegrees = twoDegrees.toLocaleLowerCase();
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
  likeCoffee = likeCoffee.toLocaleLowerCase();
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
  likeSports = likeSports.toLocaleLowerCase();
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
  workedMicrosoft = workedMicrosoft.toLocaleLowerCase();
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
}
