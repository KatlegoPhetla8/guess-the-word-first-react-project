import './App.css';
import {useState, useEffect} from 'react'
import {Keyboard } from './User Interface/Keyboard';
import { GameOver} from './User Interface/GameOver';
import {createContext, React} from 'react';
import { GameRestart } from './User Interface/RestartGame';

export const AppContext = createContext();

function App() {
const [fullWord, setFullWord] = useState("") // Recieves full word from API but doesn't split it.
const [word, wordGen] = useState([]); // State that retrieves the word from the API and split it turning to an array.
const [revealLetter, setRevealLetter] = useState(new Array(word.length).fill(false)); // So an array is created at the length of word. Since the letters have not been guessed they are set to false with the fill(false) function.
const [usedLetter, setUsedLetter] = useState(new Array()); // This state stores the letters that have been used to guess and displays them.
const [tries, setTries] = useState(10); // Amount of tries player gets.

// Here we have the function for retrieving the btnLeter or letter pressed from keyboard component
let btnGuess;
const btnData = (data) =>{
  btnGuess = data;
};

// Mounts the setUsedLetter once, its equal to the button guess.
useEffect (() =>{
setUsedLetter([btnGuess]);
}, [])

// Fetching API for random word.
const getWord = () =>{
  fetch('https://random-word-api.herokuapp.com/word').then((res) => res.json()).then((data) =>{
    setFullWord(data);
    wordGen(data[0]?.toString().split(''));
  });
  btnGuess = '';
  setRevealLetter(new Array(word.length).fill(false));
}

console.log(fullWord);

function submitLetter (){
  usedLetter.push(btnGuess);

  // Code below is a loop that runs through the whole word array and updates the revealLetter array if the word[i] is correct. Since the revealLetter is an array that starts with false values at each position.
  const newRevealedLetter = [...revealLetter];
  for (let i = 0; i < word.length; i++){
    if (word[i] === btnGuess){
      newRevealedLetter[i] = true;
      setRevealLetter(newRevealedLetter);
    }
  }
  if (!word.includes(btnGuess)){ // If the guessed letter is not in the word then this code runs
    setTries(tries -1)
  }

};

// countTruthy counts the amounts of truthy booleans in revealLetter array.
let countTruthy;

// Code for when the player wins the game
for (let i = 0; i < revealLetter.length; i++){

  // So since the countTruthy isNaN, we covert it to a Number here if it isNan.
  if (isNaN(countTruthy)){
    countTruthy = 0;
  }

  if (revealLetter[i] === true){
    countTruthy +=1;
    console.log(countTruthy);
  }
  if (countTruthy === word.length){
    console.log('You have won');
  }
};

// If tries === = then game should end.
if(tries === 0){
  console.log("Game Over");
};

// This function restarts the whole game
function restartGame (){
  getWord();
  btnGuess = '';
  // setRevealLetter(new Array(word.length).fill(false));
  setTries(10);
  setUsedLetter(new Array());
  setFullWord("");
  countTruthy = NaN;
};

  return (
    <AppContext.Provider value={{tries,fullWord, countTruthy, word, restartGame, btnGuess, getWord, submitLetter}}>

    <div className="App">


      <div className="game-display" style={tries >= 1 && countTruthy !== word.length ? {display:'contents'} : {display:'none'}} >
      <h1>Guess the Word</h1>
      <h3 className='tries'>Tries: {tries}</h3>

      <button className="play-button" type='button' onClick={submitLetter}>Submit Letter</button>
      <button className="play-button" type='button' onClick={getWord}>Guess New Word</button>
     
      
      <div className="letter-used-div">
        {usedLetter.map((letter, index) => (<p key={index} >{letter}</p>))}
      </div>

      <div>
        {word?.map((letter, index) => (<span className="span-letter" key={index} style={{color: revealLetter[index] ? "whitesmoke" : "purple" }}  >{letter}</span>))} 
      </div>

      </div>
      
    

    <div>
      <Keyboard func={btnData}/>
    </div>

    <GameOver/>
    <GameRestart/>
    </div>
    </AppContext.Provider>

  );
}

export default App;
