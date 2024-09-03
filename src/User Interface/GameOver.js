import '../App.css';
import { useState } from "react";
import { useContext } from "react";
import  { AppContext } from "../App";

export  function GameOver (){
    // variables and functions recieved from App
    const {tries, fullWord, restartGame} = useContext(AppContext);
    
    return (
        
        <div >
            
    {tries === 0 &&  
    <div className="game-over">
    <h1>GAME OVER</h1>
    <button onClick={restartGame}>Restart Game</button>
    <h1 className="sorry-word">Sorry the word was: {fullWord}</h1>
    </div>}

        </div>
    )
};



