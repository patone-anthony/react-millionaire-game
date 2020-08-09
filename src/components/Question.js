import React from "react";
import AnswerCard from "./AnswerCard";
const { questions } = require("../questions");

export default function Question(props) {
  const {
    currentIndex,
    setCurrentIndex,
    userScore,
    setUserScore,
    timer,
    setTimer,
    runGame,
    setRunGame,
    setStartGame,
    startGame,
    questionTracker,
    setQuestionTracker,
  } = props;

  const handleClick = () => {
    // remove highlighting
    let highlightItems = document.querySelectorAll(
      ".correct, .incorrect, .correct-left-triangle, .incorrect-left-triangle, .correct-right-triangle, .incorrect-right-triangle"
    );

    for (let highlightItem of highlightItems) {
      highlightItem.classList.remove(
        "correct",
        "incorrect",
        "correct-right-triangle",
        "correct-left-triangle",
        "incorrect-right-triangle",
        "incorrect-left-triangle"
      );
    }

    // add back hover
    // remove hover from all answers
    let hoverItems = document.querySelectorAll(".question-choice");

    for (let hoverItem of hoverItems) {
      hoverItem.classList.add("question-choice-hover");
    }

    if (currentIndex === 14) {
      setRunGame(false);
      setStartGame(2);
    } else {
      setRunGame(true);
      setCurrentIndex(currentIndex + 1);
      setTimer(30);
    }
    console.log(startGame);
  };

  return (
    <div style={{ flex: "1", display: "flex", width: "100%", flexWrap: "wrap" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "3",
          width: "100%",
          paddingTop: "1rem",
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
            <p>{questions[currentIndex].question || null}</p>
          </div>
          <AnswerCard
            currentIndex={currentIndex}
            userScore={userScore}
            setUserScore={setUserScore}
            runGame={runGame}
            setRunGame={setRunGame}
            timer={timer}
            questionTracker={questionTracker}
            setQuestionTracker={setQuestionTracker}
          />
        </div>
      </div>
      {console.log(runGame, currentIndex)}

      {/*  */}
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          zIndex: "3",
          fontSize: "40px",
          alignItems: "center",
          height: "80px",
        }}
      >
        {(() => {
          if (!runGame && currentIndex < 14) {
            console.log("inside conditional");
            return (
              <button
                className="nextButton"
                onClick={handleClick}
                style={{
                  height: "50px",
                  width: "180px",
                  background: "rgba(250, 137, 0, 0.85)",
                  margin: "1rem Auto",
                  borderRadius: "10px",
                  border: "none",
                  display: "block",
                  boxShadow: "1px 1px 5px #ebebeb",
                  zIndex: "2",
                  cursor: "pointer",
                  fontSize: "22px",
                }}
              >
                Next Question
              </button>
            );
          } else if (!runGame && currentIndex === 14) {
            return (
              <button
                className="nextButton"
                onClick={handleClick}
                style={{
                  height: "50px",
                  width: "180px",
                  background: "rgba(250, 137, 0, 0.85)",
                  margin: "1rem Auto",
                  borderRadius: "10px",
                  border: "none",
                  display: "block",
                  boxShadow: "1px 1px 5px #ebebeb",
                  zIndex: "2",
                  cursor: "pointer",
                  fontSize: "22px",
                }}
              >
                Finish
              </button>
            );
          } else {
            return (
              <div
                style={{
                  height: "80px",
                  width: "100%",
                }}
              ></div>
            );
          }
        })()}
      </div>
    </div>
  );
}
