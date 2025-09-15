let guess = parseInt(Math.random()*100 +1 )
const  submit = document.querySelector('#subt')
const  userInput = document.querySelector('#guessField')
const  guesseArray = document.querySelector('.guesses')
const  remaining = document.querySelector('.lastResult')
const  diff = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess= []
let numGame = 1;

let playGame = true;

if(playGame) {
   submit.addEventListener("click" , (e)=> {
      e.preventDefault()
      const userguess = parseInt(userInput.value)
      validateGuess(userguess);
   })
}

function validateGuess (number) {
  if(number<=0  || isNaN(number) || number > 100 ) {
    alert('Enter valid Number')
    userInput.value =''
  }

  else {
    prevGuess.push(number)
    if(numGame === 10 ) {
      displayGuess(number) 
      displayMessage(`Game over.... Random guess was ${guess}`)
      remaining.innerHTML= 0

      endgame();
    }
    else {
      displayGuess(number)
      checkGuess(number)
    }
  }
}

 function checkGuess(number) {
   if(number == guess) {

     displayMessage('You guessed it right')
     endgame()

    }
    else if( number > guess)
    displayMessage('Number is Greater')
    else
    displayMessage('Number is Smaller')
 }
function displayGuess (number) {
  userInput.value = ''
  guesseArray.innerHTML += `${number} `
  if (number !== guess) {  
    numGame++; 
    remaining.innerHTML = `${11-numGame}`
  }
}

function displayMessage( message ) {
  diff.innerHTML = `<h2>${message}</h2>`
}

function endgame() {
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="NewGame">New Game </h2>`
  startOver.appendChild(p)
  playGame= false
  newGame()

}

function newGame () {
  const newGameButton = document.querySelector('#NewGame')
  newGameButton.addEventListener('click' , (e) => {
    guess = parseInt(Math.random()*100 +1 )
    prevGuess=[]
    numGame=1
    guesseArray.innerHTML=''
    remaining.innerHTML = `${11 - numGame}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
     playGame= true

  })
}