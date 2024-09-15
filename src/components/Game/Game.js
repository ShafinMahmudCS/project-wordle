import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import TextInput from "../TextInput/TextInput";
import GuessResults from "../GuessResults/GuessResults";
import GameOverBanner from "../GameOverBanner/GameOverBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessArray, setGuessArray] = React.useState([]);

  const [gameStatus, setGameStatus] = React.useState("running");

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guessArray, tentativeGuess];
    setGuessArray(nextGuesses);

    if (tentativeGuess === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= 6) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      {gameStatus}
      <GuessResults guessArray={guessArray} answer={answer} />
      <TextInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus !== "running" && (
        <GameOverBanner
          numOfGuesses={guessArray.length}
          gameStatus={gameStatus}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
