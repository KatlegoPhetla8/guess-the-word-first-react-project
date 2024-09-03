import '../App.css';
import { useContext } from "react";
import { AppContext } from "../App";


export const GameRestart = () =>{
    // variables and functions recieved from App
    const {countTruthy, word, restartGame} = useContext(AppContext); // Grabbing the state value from App.js


    return (
        <div className="game-won-restart">
            {countTruthy === word.length &&
            <div className="game-won">
            <h1>CONGRATULATIONS</h1>
            <h2>YOU WON</h2>
            <button onClick={restartGame}>Restart Game</button>
            </div>}
            
        </div>
    )
}