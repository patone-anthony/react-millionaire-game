import React, { useState } from "react";
import "./App.css";
import Intro from "./components/Intro";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

// To do
// fix question panel (x and check marks)

function App() {
  const [startGame, setStartGame] = useState(0);
  const [userScore, setUserScore] = useState(0);

  return (
    <div className="App" style={{ position: "relative" }}>
      {(() => {
        if (startGame === 0) {
          return (
            <div>
              <Intro setStartGame={setStartGame} />{" "}
            </div>
          );
        } else if (startGame === 1) {
          return (
            <div>
              <Game
                startGame={startGame}
                setStartGame={setStartGame}
                userScore={userScore}
                setUserScore={setUserScore}
              />
            </div>
          );
        } else {
          return (
            <GameOver
              setStartGame={setStartGame}
              userScore={userScore}
              setUserScore={setUserScore}
            />
          );
        }
      })()}
    </div>
  );
}

export default App;
