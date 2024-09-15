import React from "react";
import { range } from "../../utils";

import { checkGuess } from "../../game-helpers";

function GameGrid({ value, answer }) {
  let guessStatus = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={Math.random()}
          className={`cell ${guessStatus ? guessStatus[num].status : ""}`}
        >
          {guessStatus ? guessStatus[num].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default GameGrid;
