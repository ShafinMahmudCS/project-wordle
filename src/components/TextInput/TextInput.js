import React from "react";

function TextInput({ handleSubmitGuess, gameStatus }) {
  const [inputText, setInputText] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmitGuess(inputText);
        setInputText("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={gameStatus !== "running"}
        required
        minLength={5}
        maxLength={5}
        pattern={"[a-zA-Z]{5}"}
        title={"5 letter word"}
        id="guess-input"
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default TextInput;
