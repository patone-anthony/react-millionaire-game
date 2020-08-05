import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import Score from "./Score";
import QuestionPanel from "./QuestionPanel";

export default function Games(props) {
  const { startGame } = props;
  const [runTimer, setRunTimer] = useState(true);
  const [timer, setTimer] = useState(30);

  // useEffect = {};

  return (
    <div>
      {startGame ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <Timer
            runTimer={runTimer}
            setrunTimer={setRunTimer}
            timer={timer}
            setTimer={setTimer}
          />
          <Score />
          <QuestionPanel />
        </div>
      ) : null}
      {/* Question/Asnwer */}
    </div>
  );
}
