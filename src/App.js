import React, { useState } from "react";
import "./App.css";
import Intro from "./components/Intro";
import Game from "./components/Game";

function App() {
  const [startGame, setStartGame] = useState(false);

  return (
    <div className="App">
      {startGame ? null : (
        <Intro startGame={startGame} setStartGame={setStartGame} />
      )}
      <Game startGame={startGame} />
    </div>
  );
}

export default App;
