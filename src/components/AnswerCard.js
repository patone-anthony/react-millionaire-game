import React, { useEffect } from "react";
const { questions } = require("../questions");

export default function AnswerCard(props) {
  const { currentIndex, userScore, setUserScore, runGame, setRunGame, timer } = props;

  useEffect(() => {
    if (timer === 0) {
      checkUserAnswer();
    }
  });

  const checkUserAnswer = (e, userChoice) => {
    e = e || null;
    userChoice = userChoice || null;
    if (runGame) {
      // stop game
      setRunGame(false);

      // remove hover from all answers
      let items = document.querySelectorAll(".question-choice-hover");

      for (let item of items) {
        item.classList.remove("question-choice-hover");
      }

      // correct answer
      if (e && userChoice === questions[currentIndex].correct_answer) {
        setUserScore(userScore + 10);

        // hightlight correct answer in green
        e.currentTarget.classList.add("correct");
        e.currentTarget.querySelector(".left-triangle").classList.add("correct-left-triangle");
        e.currentTarget.querySelector(".right-triangle").classList.add("correct-right-triangle");
      } else if (e && userChoice !== questions[currentIndex].correct_answer) {
        // highlight incorrect answer in red
        e.currentTarget.classList.add("incorrect");
        e.currentTarget.querySelector(".left-triangle").classList.add("incorrect-left-triangle");
        e.currentTarget.querySelector(".right-triangle").classList.add("incorrect-right-triangle");
        // hightlight correct answer
      }
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        fontSize: "24px",
        marginTop: "1rem",
        textAlign: "center",
        justifyItems: "center",
        gridGap: "1rem",
        zIndex: "2",
      }}
    >
      <button
        name="a"
        onClick={(e) => checkUserAnswer(e, questions[currentIndex].choices[0])}
        className="question-choice question-choice-hover"
        disabled={!runGame}
        style={{
          fontSize: "24px",
          border: "none",
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          width: "80%",
          position: "relative",
          height: "60px",
          justifyItems: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ color: "orange" }}>A:&nbsp;</span>
        <div className="user-answer">{questions[currentIndex].choices[0]}</div>
        <div
          className="left-triangle left-triangle-hover "
          style={{
            color: "rgba(255, 255, 255, 0.85)",
            position: "absolute",
            left: "-30px",
            top: "0px",
            width: "0",
            height: "0",
            borderTop: "30px solid transparent",
            borderBottom: "30px solid transparent",
            borderRight: "30px solid rgba(0, 0, 0, 0.85)",
          }}
        ></div>
        <div
          className="right-triangle right-triangle-hover"
          style={{
            color: "rgba(255, 255, 255, 0.85)",
            position: "absolute",
            right: "-30px",
            top: "0px",
            width: "0",
            height: "0",
            borderTop: "30px solid transparent",
            borderBottom: "30px solid transparent",
            borderLeft: "30px solid rgba(0, 0, 0, 0.85)",
          }}
        ></div>
      </button>
      <button
        name="b"
        onClick={(e) => checkUserAnswer(e, questions[currentIndex].choices[1])}
        className="question-choice question-choice-hover"
        disabled={!runGame}
        style={{
          fontSize: "24px",
          border: "none",
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          width: "80%",
          position: "relative",
          height: "60px",
          justifyItems: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ color: "orange" }}>B:&nbsp;</span>
        <div className="user-answer">{questions[currentIndex].choices[1]}</div>
        <div
          className="left-triangle left-triangle-hover "
          style={{
            color: "rgba(255, 255, 255, 0.85)",
            position: "absolute",
            left: "-30px",
            top: "0px",
            width: "0",
            height: "0",
            borderTop: "30px solid transparent",
            borderBottom: "30px solid transparent",
            borderRight: "30px solid rgba(0, 0, 0, 0.85)",
          }}
        ></div>
        <div
          className="right-triangle right-triangle-hover"
          style={{
            color: "rgba(255, 255, 255, 0.85)",
            position: "absolute",
            right: "-30px",
            top: "0px",
            width: "0",
            height: "0",
            borderTop: "30px solid transparent",
            borderBottom: "30px solid transparent",
            borderLeft: "30px solid rgba(0, 0, 0, 0.85)",
          }}
        ></div>
      </button>
      <button
        name="c"
        onClick={(e) => checkUserAnswer(e, questions[currentIndex].choices[2])}
        className="question-choice question-choice-hover"
        disabled={!runGame}
        style={{
          fontSize: "24px",
          border: "none",
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          width: "80%",
          position: "relative",
          height: "60px",
          justifyItems: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ color: "orange" }}>C:&nbsp;</span>
        <div className="user-answer">{questions[currentIndex].choices[2]}</div>
        <div
          className="left-triangle left-triangle-hover "
          style={{
            color: "rgba(255, 255, 255, 0.85)",
            position: "absolute",
            left: "-30px",
            top: "0px",
            width: "0",
            height: "0",
            borderTop: "30px solid transparent",
            borderBottom: "30px solid transparent",
            borderRight: "30px solid rgba(0, 0, 0, 0.85)",
          }}
        ></div>
        <div
          className="right-triangle right-triangle-hover"
          style={{
            color: "rgba(255, 255, 255, 0.85)",
            position: "absolute",
            right: "-30px",
            top: "0px",
            width: "0",
            height: "0",
            borderTop: "30px solid transparent",
            borderBottom: "30px solid transparent",
            borderLeft: "30px solid rgba(0, 0, 0, 0.85)",
          }}
        ></div>
      </button>
      <button
        name="d"
        onClick={(e) => checkUserAnswer(e, questions[currentIndex].choices[3])}
        className="question-choice question-choice-hover"
        disabled={!runGame}
        style={{
          fontSize: "24px",
          border: "none",
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          width: "80%",
          position: "relative",
          height: "60px",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span style={{ color: "orange" }}>D:&nbsp;</span>
        <div className="user-answer">{questions[currentIndex].choices[3]}</div>
        <div
          className="left-triangle left-triangle-hover "
          style={{
            color: "rgba(255, 255, 255, 0.85)",
            position: "absolute",
            left: "-30px",
            top: "0px",
            width: "0",
            height: "0",
            borderTop: "30px solid transparent",
            borderBottom: "30px solid transparent",
            borderRight: "30px solid rgba(0, 0, 0, 0.85)",
          }}
        ></div>
        <div
          className="right-triangle right-triangle-hover"
          style={{
            color: "rgba(255, 255, 255, 0.85)",
            position: "absolute",
            right: "-30px",
            top: "0px",
            width: "0",
            height: "0",
            borderTop: "30px solid transparent",
            borderBottom: "30px solid transparent",
            borderLeft: "30px solid rgba(0, 0, 0, 0.85)",
          }}
        ></div>
      </button>
    </div>
  );
}

// }, [currentIndex]);

// const card = questions[currentIndex].choices.map((choice, index) => {
//   return (
//     <div
//       onClick={checkAnswer}
//       className="questionChoice"
//       style={{
//         backgroundColor: "rgba(0, 0, 0, 0.85)",
//         width: "80%",
//         position: "relative",
//         height: "60px",
//         justifyItems: "center",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <span style={{ color: "orange" }}>A:&nbsp;</span>
//       <div className="user-answer">{choice}</div>
//       <div
//         style={{
//           color: "rgba(255, 255, 255, 0.85)",
//           position: "absolute",
//           left: "-30px",
//           top: "0px",
//           width: "0",
//           height: "0",
//           borderTop: "30px solid transparent",
//           borderBottom: "30px solid transparent",
//           borderRight: "30px solid rgba(0, 0, 0, 0.85)",
//         }}
//       ></div>
//       <div
//         style={{
//           color: "rgba(255, 255, 255, 0.85)",
//           position: "absolute",
//           right: "-30px",
//           top: "0px",
//           width: "0",
//           height: "0",
//           borderTop: "30px solid transparent",
//           borderBottom: "30px solid transparent",
//           borderLeft: "30px solid rgba(0, 0, 0, 0.85)",
//         }}
//       ></div>
//     </div>
//   );
// });
//
//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "1fr 1fr",
//         fontSize: "24px",
//         marginTop: "1rem",
//         textAlign: "center",
//         justifyItems: "center",
//         gridGap: "1rem",
//         zIndex: "2",
//       }}
//     >
//       {card}
//     </div>
//   );
// }
