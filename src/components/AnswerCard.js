import React, { useEffect } from "react";
const { questions } = require("../questions");

export default function AnswerCard(props) {
  const {
    currentIndex,
    setCurrentIndex,
    userScore,
    setUserScore,
    setTimer,
    timer,
    runGame,
    setRunGame,
    checkAnswer,
    setCheckAnswer,
  } = props;

  setCheckAnswer(true, () => checkUserAnswer);

  const checkUserAnswer = (e, userChoice) => {
    // if run game is true
    console.log(checkAnswer);

    if (runGame && checkAnswer) {
      //stop timer & prevent function from running again
      setRunGame(false);

      // check answer
      if (timer > 0 && userChoice === questions[currentIndex].correct_answer) {
        setUserScore(userScore + 10);
      }

      // highlight correct/incorrect answer

      //   let interval = null;
      //   if (timer > 0) {
      //     interval = setInterval(() => {
      //       setTimer((timer) => timer - 1);
      //     }, 1000);
      //   }
      //   return () => clearInterval(interval);
      // }, [runGame, timer]);

      //wait 3 seconds
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setTimer(30);
        setRunGame(true);
      }, 3000);
    }

    // setCheckAnswer(false);
    // if you reach index 15, stop game
    if (currentIndex === 15) {
      setRunGame(false);
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
      <div
        onClick={(e) => checkUserAnswer(e, questions[currentIndex].choices[0])}
        className="questionChoice"
        style={{
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
      </div>
      <div
        onClick={(e) => checkUserAnswer(e, questions[currentIndex].choices[1])}
        className="questionChoice"
        style={{
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
      </div>
      <div
        onClick={(e) => checkUserAnswer(e, questions[currentIndex].choices[2])}
        className="questionChoice"
        style={{
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
      </div>
      <div
        onClick={(e) => checkUserAnswer(e, questions[currentIndex].choices[3])}
        className="questionChoice"
        style={{
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
      </div>
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
