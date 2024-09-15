import React from "react";
import GameGrid from "../GameGrid/GameGrid";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guessArray, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <GameGrid key={Math.random()} value={guessArray[num]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
