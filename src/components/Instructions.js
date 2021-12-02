import React from "react";
import "./Instructions.css";
const Instructions = () => {
    return (
        <div class="instructions">
            <h1 class="instructions-title">Welcome to the Airplane Game ✈️.</h1>
            <h2 class="instructions-subtitle">Instructions: </h2>
            <ol class="instructions-list">
                <li class="instructions-item">Press start game down below.</li>
                <li class="instructions-item">Bomb the square where the airplane hides. If you find the airplane, a 🔥 icon appears, otherwise you will see a 🚩 icon.</li>
                <li class="instructions-item">Beat your best times, and compare scores below the game.</li>
            </ol>
        </div>
    );
};

export default Instructions;
