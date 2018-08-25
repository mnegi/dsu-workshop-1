var submitBtn = document.getElementById('guessSubmit');
var guessNumber = document.getElementById('guessNumber');
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');


var randomNumber = Math.floor(Math.random() * 100) + 1;
var guessCount = 1;
guessNumber.focus();

submitBtn.onclick = function(e){
    guessNumber = parseInt(document.getElementById('guessNumber').value);    
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += guessNumber + ' ';
    if(randomNumber === guessNumber){
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lastResult.style.color = 'white';
        lastResult.style.padding = '10px';
        lowOrHi.textContent = '';
        //setGameOver();
    }else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        //setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        lastResult.style.padding = '10px';
        lastResult.style.color = 'white';
        if (guessNumber < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        } else if (guessNumber > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
}