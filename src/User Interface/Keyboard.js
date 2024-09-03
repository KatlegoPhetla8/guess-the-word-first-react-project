import '../App.css';
import {useState} from 'react';
import {useContext} from 'react';
import {AppContext} from '../App';


export function Keyboard  (props){
    // variables and functions recieved from App
    const {tries, countTruthy, word, btnGuess, restartGame} = useContext(AppContext);
    const [btnLetter, setBtnLetter] = useState("");

    // Function that passes the pressed letter to the App component.
    props.func(btnLetter);

    // This function gets the innerHTML of the button clicked, basically equals the letter isside
    const buttonClick = (event) =>{
        setBtnLetter(event.target.innerHTML);
    };

    // if (restartGame){
    //     setBtnLetter("")
    // }

    return (
        <div>

        <div className='display-keyboard' style={tries >= 1 && countTruthy !== word.length ? {display:'contents'} :{display:"none"}}>

        <h2 className='display-letter'>{btnLetter}</h2>

    <div className='keyboard'>
        <button onClick={buttonClick}>a</button>
        <button onClick={buttonClick}>b</button>
        <button onClick={buttonClick}>c</button>
        <button onClick={buttonClick}>d</button>
        <button onClick={buttonClick}>e</button>
        <button onClick={buttonClick}>f</button>
        <button onClick={buttonClick}>g</button>
        <button onClick={buttonClick}>h</button>
        <button onClick={buttonClick}>i</button>
        <button onClick={buttonClick}>j</button>
        <button onClick={buttonClick}>k</button>
        <button onClick={buttonClick}>l</button>
        <button onClick={buttonClick}>m</button>
        <button onClick={buttonClick}>n</button>
        <button onClick={buttonClick}>o</button>
        <button onClick={buttonClick}>p</button>
        <button onClick={buttonClick}>q</button>
        <button onClick={buttonClick}>r</button>
        <button onClick={buttonClick}>s</button>
        <button onClick={buttonClick}>t</button>
        <button onClick={buttonClick}>u</button>
        <button onClick={buttonClick}>v</button>
        <button onClick={buttonClick}>w</button>
        <button onClick={buttonClick}>x</button>
        <button onClick={buttonClick}>y</button>
        <button onClick={buttonClick}>z</button>

    </div>
        </div>
        
        </div>

        

    )
}