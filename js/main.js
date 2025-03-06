const bankAmount = document.getElementById('bankAmount');
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const num3 = document.getElementById('num3')
const min = document.getElementById('min')
const max = document.getElementById('max')
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


// give the player a bank on 1000$
let winnings = 1000
bankAmount.innerHTML = winnings
// put smurf on min that run function
min.addEventListener('click', runMin)
max.addEventListener('click', runMax)

//write min function that takes 10$ from players bank and randomizes 3 numbers.

function runMin() {
    winnings -= 10
    bankAmount.innerHTML = winnings
     let num1Result = getRandomInt(5)
     let num2Result = getRandomInt(5)
     let num3Result = getRandomInt(5)
     num1.src = (num1Result == 0 ) ? 'images/Goku.png' :
             (num1Result == 1 ) ? 'images/Vegeta.png' :
             (num1Result == 2 ) ? 'images/Piccolo.png' :
             (num1Result == 3 ) ? 'images/Shin.png' :
              'images/Krillin.png';
              num2.src = (num2Result == 0 ) ? 'images/Goku.png' :
              (num2Result == 1 ) ? 'images/Vegeta.png' :
              (num2Result == 2 ) ? 'images/Piccolo.png' :
              (num2Result == 3 ) ? 'images/Shin.png' :
               'images/Krillin.png';
               num3.src = (num3Result == 0 ) ? 'images/Goku.png' :
               (num3Result == 1 ) ? 'images/Vegeta.png' :
               (num3Result == 2 ) ? 'images/Piccolo.png' :
               (num3Result == 3 ) ? 'images/Shin.png' :
                'images/Krillin.png';
     if (num1Result === num2Result && num1Result === num3Result) {
        winnings += 100
        bankAmount.innerHTML = winnings
     }
     
     }
     
     function runMax() {
        winnings -= 50
        bankAmount.innerHTML = winnings
         let num1Result = getRandomInt(5)
         let num2Result = getRandomInt(5)
         let num3Result = getRandomInt(5)
             num1.src = (num1Result == 0 ) ? 'images/Goku.png' :
             (num1Result == 1 ) ? 'images/Vegeta.png' :
             (num1Result == 2 ) ? 'images/Piccolo.png' :
             (num1Result == 3 ) ? 'images/Shin.png' :
              'images/Krillin.png';
              num2.src = (num2Result == 0 ) ? 'images/Goku.png' :
              (num2Result == 1 ) ? 'images/Vegeta.png' :
              (num2Result == 2 ) ? 'images/Piccolo.png' :
              (num2Result == 3 ) ? 'images/Shin.png' :
               'images/Krillin.png';
               num3.src = (num3Result == 0 ) ? 'images/Goku.png' :
               (num3Result == 1 ) ? 'images/Vegeta.png' :
               (num3Result == 2 ) ? 'images/Piccolo.png' :
               (num3Result == 3 ) ? 'images/Shin.png' :
                'images/Krillin.png';

         if (num1Result === num2Result && num1Result === num3Result) {
            winnings += 500
            bankAmount.innerHTML = winnings
         }
         
         }


//if numbers match give back 100 dollars and write you win

//if numbers dont match keep 10 and write you lose


//put a smuft on max that runs a function

//write min function that takes 50$ from playersbank and randomizes 3 numbers

//if numbers match give back 500$ and write you win

//if numbers dont match keep 10 and write you lose