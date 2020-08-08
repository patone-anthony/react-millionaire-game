import React from "react";
import AnswerCard from "./AnswerCard";
const { questions } = require("../questions");

export default function Question(props) {
  const {
    currentIndex,
    setCurrentIndex,
    userScore,
    setUserScore,
    setTimer,
    runGame,
    setRunGame,
    checkAnswer,
    setCheckAnswer,
  } = props;

  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "3",
      }}
    >
      <div
        style={{
          width: "75%",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            backgroundColor: "rgba(0, 0, 0, 0.80)",
            padding: "1rem",
            textAlign: "center",
            height: "60px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "-30px",
              top: "0px",
              width: "0",
              height: "0",
              borderTop: "30px solid transparent",
              borderBottom: "30px solid transparent",
              borderRight: "30px solid rgba(0, 0, 0, 0.80)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              right: "-30px",
              top: "0px",
              width: "0",
              height: "0",
              borderTop: "30px solid transparent",
              borderBottom: "30px solid transparent",
              borderLeft: "30px solid rgba(0, 0, 0, 0.80)",
            }}
          ></div>
          <p>{questions[currentIndex].question}</p>
        </div>
        <AnswerCard
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          userScore={userScore}
          setUserScore={setUserScore}
          setTimer={setTimer}
          runGame={runGame}
          setRunGame={setRunGame}
          checkAnswer={checkAnswer}
          setCheckAnswer={setCheckAnswer}
        />
      </div>
    </div>
  );
}
