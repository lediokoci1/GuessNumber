'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
console.log(secretNumber);


document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = null;
    document.querySelector('.message').textContent = 'Start guessing...'
    score = 20;
    document.querySelector('.score').textContent = score;
   console.log(secretNumber = Math.trunc(Math.random()*20)+1); 
})

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    if( !guess ){
        document.querySelector('.message').textContent = 'No Value';
    } else if( guess === secretNumber) {
        let max =  document.querySelector('.highscore').textContent;
        if( score > max){
            document.querySelector('.highscore').textContent = score; 
        }
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
    } else if ( guess !== secretNumber) {
        if(score >= 1){
            document.querySelector('.message').textContent = guess > secretNumber ? 'Too High...' : 'Too Low...';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.message').textContent = 'You Lose...';
        }
    }
});

