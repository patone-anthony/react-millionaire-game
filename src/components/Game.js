import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import Score from "./Score";
import QuestionPanel from "./QuestionPanel";
import Question from "./Question";

export default function Games(props) {
  const { startGame } = props;
  const [runTimer, setRunTimer] = useState(true);
  const [timer, setTimer] = useState(30);
  const [currentIndex, setCurrentIndex] = useState(1);

  // Todo
  // get current index of question, display question, highlight panel

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
              runTimer={runTimer}
              setrunTimer={setRunTimer}
              timer={timer}
              setTimer={setTimer}
            />
            <Score />
            <QuestionPanel currentIndex={currentIndex} />
          </div>
          <Question />
        </div>
      ) : null}
    </div>
  );
}
