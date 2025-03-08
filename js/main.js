const bankAmount = document.getElementById('bankAmount');
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const num3 = document.getElementById('num3')
const min = document.getElementById('min')
const max = document.getElementById('max')
const fighter = document.getElementsByClassName('fighter')
const transmissionSound = new Audio('sounds/transmission.mp3')
const kamehamehaSound = new Audio('sounds/kamehameha.mp3')
const rowOneWin = document.getElementById('rowOneWin')
const rowTwoWin = document.getElementById('rowTwoWin')
const rowThreeWin = document.getElementById('rowThreeWin')
const crossOneWin = document.getElementById('crossOneWin')
const crossTwoWin = document.getElementById('crossTwoWin')
const youWin = document.getElementById('youWin')
const youLose = document.getElementById('youLose')


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
let playSound = () => transmissionSound.play()
let playWinSound = () => kamehamehaSound.play()

function transmission() {
    num1.src = 'transmission.png'
    num2.src = 'transmission.png'
    num3.src = 'transmission.png'
    num4.src = 'transmission.png'
    num5.src = 'transmission.png'
    num6.src = 'transmission.png'
    num7.src = 'transmission.png'
    num8.src = 'transmission.png'
    num9.src = 'transmission.png'
}
function randMin() {
    
   winnings -= 10
   bankAmount.innerHTML = winnings
    let num1Result = getRandomInt(7)
    let num2Result = getRandomInt(7)
    let num3Result = getRandomInt(7)
    let num4Result = getRandomInt(7)
    let num5Result = getRandomInt(7)
    let num6Result = getRandomInt(7)
    let num7Result = getRandomInt(7)
    let num8Result = getRandomInt(7)
    let num9Result = getRandomInt(7)
    
        num1.src = (num1Result == 0 ) ? 'images/Goku.png' :
        (num1Result == 1 ) ? 'images/Vegeta.png' :
        (num1Result == 2 ) ? 'images/Piccolo.png' :
        (num1Result == 3 ) ? 'images/Shin.png' :
        (num1Result == 4 ) ? 'images/roshi.png' :
        (num1Result == 5 ) ? 'images/satan.png' :
        (num1Result == 6 ) ? 'images/bu.png' :
        'images/android.pn ';
         num2.src = (num2Result == 0 ) ? 'images/Goku.png' :
         (num2Result == 1 ) ? 'images/Vegeta.png' :
         (num2Result == 2 ) ? 'images/Piccolo.png' :
         (num2Result == 3 ) ? 'images/Shin.png' :
         (num2Result == 4 ) ? 'images/roshi.png' :
         (num2Result == 5 ) ? 'images/satan.png' :
         (num2Result == 6 ) ? 'images/bu.png' :
         'images/android.png' ;
          num3.src = (num3Result == 0 ) ? 'images/Goku.png' :
          (num3Result == 1 ) ? 'images/Vegeta.png' :
          (num3Result == 2 ) ? 'images/Piccolo.png' :
          (num3Result == 3 ) ? 'images/Shin.png' :
          (num3Result == 4 ) ? 'images/roshi.png' :
          (num3Result == 5 ) ? 'images/satan.png' :
          (num3Result == 6 ) ? 'images/bu.png' :
          'images/android.png' ;
           num4.src = (num4Result == 0 ) ? 'images/Goku.png' :
          (num4Result == 1 ) ? 'images/Vegeta.png' :
          (num4Result == 2 ) ? 'images/Piccolo.png' :
          (num4Result == 3 ) ? 'images/Shin.png' :
          (num4Result == 4 ) ? 'images/roshi.png' :
          (num4Result == 5 ) ? 'images/satan.png' :
          (num4Result == 6 ) ? 'images/bu.png' :
          'images/android.png' ;
           num5.src = (num5Result == 0 ) ? 'images/Goku.png' :
          (num5Result == 1 ) ? 'images/Vegeta.png' :
          (num5Result == 2 ) ? 'images/Piccolo.png' :
          (num5Result == 3 ) ? 'images/Shin.png' :
          (num5Result == 4 ) ? 'images/roshi.png' :
          (num5Result == 5 ) ? 'images/satan.png' :
          (num5Result == 6 ) ? 'images/bu.png' :
          'images/android.png' ;
           num6.src = (num6Result == 0 ) ? 'images/Goku.png' :
          (num6Result == 1 ) ? 'images/Vegeta.png' :
          (num6Result == 2 ) ? 'images/Piccolo.png' :
          (num6Result == 3 ) ? 'images/Shin.png' :
          (num6Result == 4 ) ? 'images/roshi.png' :
          (num6Result == 5 ) ? 'images/satan.png' :
          (num6Result == 6 ) ? 'images/bu.png' :
          'images/android.png' ;
           num7.src = (num7Result == 0 ) ? 'images/Goku.png' :
          (num7Result == 1 ) ? 'images/Vegeta.png' :
          (num7Result == 2 ) ? 'images/Piccolo.png' :
          (num7Result == 3 ) ? 'images/Shin.png' :
          (num7Result == 4 ) ? 'images/roshi.png' :
          (num7Result == 5 ) ? 'images/satan.png' :
          (num7Result == 6 ) ? 'images/bu.png' :
          'images/android.png' ;
           num8.src = (num8Result == 0 ) ? 'images/Goku.png' :
          (num8Result == 1 ) ? 'images/Vegeta.png' :
          (num8Result == 2 ) ? 'images/Piccolo.png' :
          (num8Result == 3 ) ? 'images/Shin.png' :
          (num8Result == 4 ) ? 'images/roshi.png' :
          (num8Result == 5 ) ? 'images/satan.png' :
          (num8Result == 6 ) ? 'images/bu.png' :
          'images/android.png' ;
           num9.src = (num9Result == 0 ) ? 'images/Goku.png' :
          (num9Result == 1 ) ? 'images/Vegeta.png' :
          (num9Result == 2 ) ? 'images/Piccolo.png' :
          (num9Result == 3 ) ? 'images/Shin.png' :
          (num9Result == 4 ) ? 'images/roshi.png' :
          (num9Result == 5 ) ? 'images/satan.png' :
          (num9Result == 6 ) ? 'images/bu.png' :
          'images/android.png' ;

        

    if (num1Result === num2Result && num1Result === num3Result) {
       winnings += 100
       bankAmount.innerHTML = winnings
       rowOneWin.classList.toggle('hidden')
    }
    if (num4Result === num5Result && num4Result === num6Result) {
       winnings += 100
       bankAmount.innerHTML = winnings
       rowTwoWin.classList.toggle('hidden')
    }
    if (num7Result === num8Result && num7Result === num9Result) {
       winnings += 100
       bankAmount.innerHTML = winnings
       rowThreeWin.classList.toggle('hidden')
    }
    if (num1Result === num5Result && num1Result === num9Result) {
       winnings += 100
       bankAmount.innerHTML = winnings
       crossOneWin.classList.toggle('hidden')
    }
    if (num7Result === num5Result && num7Result === num3Result) {
       winnings += 100
       bankAmount.innerHTML = winnings
       crossTwoWin.classList.toggle('hidden')
    }

    if (num1Result === num2Result && num1Result === num3Result || num4Result === num5Result && num4Result === num6Result || num7Result === num8Result && num7Result === num9Result || num1Result === num5Result && num1Result === num9Result || num7Result === num5Result && num7Result === num3Result) {
       youWin.classList.toggle('hidden')
       playWinSound()
    } else youLose.classList.toggle('hidden')
     
     }
     
     function randMax() {
        winnings -= 50
        bankAmount.innerHTML = winnings
         let num1Result = getRandomInt(7)
         let num2Result = getRandomInt(7)
         let num3Result = getRandomInt(7)
         let num4Result = getRandomInt(7)
         let num5Result = getRandomInt(7)
         let num6Result = getRandomInt(7)
         let num7Result = getRandomInt(7)
         let num8Result = getRandomInt(7)
         let num9Result = getRandomInt(7)
             num1.src = (num1Result == 0 ) ? 'images/Goku.png' :
             (num1Result == 1 ) ? 'images/Vegeta.png' :
             (num1Result == 2 ) ? 'images/Piccolo.png' :
             (num1Result == 3 ) ? 'images/Shin.png' :
             (num1Result == 4 ) ? 'images/roshi.png' :
             (num1Result == 5 ) ? 'images/satan.png' :
             (num1Result == 6 ) ? 'images/bu.png' :
             'images/android.png' ;
              num2.src = (num2Result == 0 ) ? 'images/Goku.png' :
              (num2Result == 1 ) ? 'images/Vegeta.png' :
              (num2Result == 2 ) ? 'images/Piccolo.png' :
              (num2Result == 3 ) ? 'images/Shin.png' :
              (num2Result == 4 ) ? 'images/roshi.png' :
              (num2Result == 5 ) ? 'images/satan.png' :
              (num2Result == 6 ) ? 'images/bu.png' :
              'images/android.png' ;
               num3.src = (num3Result == 0 ) ? 'images/Goku.png' :
               (num3Result == 1 ) ? 'images/Vegeta.png' :
               (num3Result == 2 ) ? 'images/Piccolo.png' :
               (num3Result == 3 ) ? 'images/Shin.png' :
               (num3Result == 4 ) ? 'images/roshi.png' :
               (num3Result == 5 ) ? 'images/satan.png' :
               (num3Result == 6 ) ? 'images/bu.png' :
               'images/android.png'  ;
                num4.src = (num4Result == 0 ) ? 'images/Goku.png' :
               (num4Result == 1 ) ? 'images/Vegeta.png' :
               (num4Result == 2 ) ? 'images/Piccolo.png' :
               (num4Result == 3 ) ? 'images/Shin.png' :
               (num4Result == 4 ) ? 'images/roshi.png' :
               (num4Result == 5 ) ? 'images/satan.png' :
               (num4Result == 6 ) ? 'images/bu.png' :
               'images/android.png' ;
                num5.src = (num5Result == 0 ) ? 'images/Goku.png' :
               (num5Result == 1 ) ? 'images/Vegeta.png' :
               (num5Result == 2 ) ? 'images/Piccolo.png' :
               (num5Result == 3 ) ? 'images/Shin.png' :
               (num5Result == 4 ) ? 'images/roshi.png' :
               (num5Result == 5 ) ? 'images/satan.png' :
               (num5Result == 6 ) ? 'images/bu.png' :
               'images/android.png'
                num6.src = (num6Result == 0 ) ? 'images/Goku.png' :
               (num6Result == 1 ) ? 'images/Vegeta.png' :
               (num6Result == 2 ) ? 'images/Piccolo.png' :
               (num6Result == 3 ) ? 'images/Shin.png' :
               (num6Result == 4 ) ? 'images/roshi.png' :
               (num6Result == 5 ) ? 'images/satan.png' :
               (num6Result == 6 ) ? 'images/bu.png' :
               'images/android.png' ;
                num7.src = (num7Result == 0 ) ? 'images/Goku.png' :
               (num7Result == 1 ) ? 'images/Vegeta.png' :
               (num7Result == 2 ) ? 'images/Piccolo.png' :
               (num7Result == 3 ) ? 'images/Shin.png' :
               (num7Result == 4 ) ? 'images/roshi.png' :
               (num7Result == 5 ) ? 'images/satan.png' :
               (num7Result == 6 ) ? 'images/bu.png' :
               'images/android.png'
                num8.src = (num8Result == 0 ) ? 'images/Goku.png' :
               (num8Result == 1 ) ? 'images/Vegeta.png' :
               (num8Result == 2 ) ? 'images/Piccolo.png' :
               (num8Result == 3 ) ? 'images/Shin.png' :
               (num8Result == 4 ) ? 'images/roshi.png' :
               (num8Result == 5 ) ? 'images/satan.png' :
               (num8Result == 6 ) ? 'images/bu.png' :
               'images/android.png'  ;
                num9.src = (num9Result == 0 ) ? 'images/Goku.png' :
               (num9Result == 1 ) ? 'images/Vegeta.png' :
               (num9Result == 2 ) ? 'images/Piccolo.png' :
               (num9Result == 3 ) ? 'images/Shin.png' :
               (num9Result == 4 ) ? 'images/roshi.png' :
               (num9Result == 5 ) ? 'images/satan.png' :
               (num9Result == 6 ) ? 'images/bu.png' :
               'images/android.png' ;

             

         if (num1Result === num2Result && num1Result === num3Result) {
            winnings += 500
            bankAmount.innerHTML = winnings
            rowOneWin.classList.toggle('hidden')
         }
         if (num4Result === num5Result && num4Result === num6Result) {
            winnings += 500
            bankAmount.innerHTML = winnings
            rowTwoWin.classList.toggle('hidden')
         }
         if (num7Result === num8Result && num7Result === num9Result) {
            winnings += 500
            bankAmount.innerHTML = winnings
            rowThreeWin.classList.toggle('hidden')
         }
         if (num1Result === num5Result && num1Result === num9Result) {
            winnings += 500
            bankAmount.innerHTML = winnings
            crossOneWin.classList.toggle('hidden')
         }
         if (num7Result === num5Result && num7Result === num3Result) {
            winnings += 500
            bankAmount.innerHTML = winnings
            crossTwoWin.classList.toggle('hidden')
         }

         if (num1Result === num2Result && num1Result === num3Result || num4Result === num5Result && num4Result === num6Result || num7Result === num8Result && num7Result === num9Result || num1Result === num5Result && num1Result === num9Result || num7Result === num5Result && num7Result === num3Result) {
            youWin.classList.toggle('hidden')
            playWinSound()
         } else youLose.classList.toggle('hidden')
         
         
         }

         function runMin() {
            youLose.classList.add('hidden')
            youWin.classList.add('hidden')
            rowOneWin.classList.add('hidden')
            rowTwoWin.classList.add('hidden')
            rowThreeWin.classList.add('hidden')
            crossOneWin.classList.add('hidden')
            crossTwoWin.classList.add('hidden')
            playSound()
            transmission();
            setTimeout(randMin, 2 * 100)
         }

         function runMax() { 
            youLose.classList.add('hidden')
            youWin.classList.add('hidden')
            rowOneWin.classList.add('hidden')
            rowTwoWin.classList.add('hidden')
            rowThreeWin.classList.add('hidden')
            crossOneWin.classList.add('hidden')
            crossTwoWin.classList.add('hidden')
            playSound()
            transmission();
            setTimeout(randMax, 1 * 100)
         }


//if numbers match give back 100 dollars and write you win

//if numbers dont match keep 10 and write you lose


//put a smuft on max that runs a function

//write min function that takes 50$ from playersbank and randomizes 3 numbers

//if numbers match give back 500$ and write you win

//if numbers dont match keep 10 and write you lose