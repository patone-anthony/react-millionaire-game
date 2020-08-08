import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import Score from "./Score";
import QuestionPanel from "./QuestionPanel";
import Question from "./Question";

export default function Games(props) {
  const { startGame } = props;
  const [runGame, setRunGame] = useState(true);
  const [runTimer, setRunTimer] = useState(true);
  const [timer, setTimer] = useState(30);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [checkAnswer, setCheckAnswer] = useState(false);

  /////// Todo ///////
  // highlight incorect/correct

  // make runGame state, when user selects answer change to false for 3 seconds
  // stop timer, prevent button click

  // pause game for 3 seconds for x seconds
  // game over screen

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
      }}
    >
      {startGame ? (
        <div
          className="flex-questions"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              justifyItems: "center",
              paddingTop: "2rem",
            }}
          >
            <Timer
              timer={timer}
              setTimer={setTimer}
              runGame={runGame}
              setCheckAnswer={setCheckAnswer}
            />
            <Score userScore={userScore} />
            <QuestionPanel currentIndex={currentIndex} />
          </div>
          <Question
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            setUserScore={setUserScore}
            userScore={userScore}
            setTimer={setTimer}
            runGame={runGame}
            setRunGame={setRunGame}
            checkAnswer={checkAnswer}
            setCheckAnswer={setCheckAnswer}
          />
        </div>
      ) : null}
    </div>
  );
}
