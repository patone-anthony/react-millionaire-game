import React, { useEffect } from "react";

export default function Timer(props) {
  const { timer, setTimer, runGame, setRunGame } = props;

  // change state
  useEffect(() => {
    let interval = null;
    if (runGame && timer > 0) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else {
      setRunGame(false);
    }

    return () => clearInterval(interval);
  });

  return (
    <div
      className="center"
      style={{
        marginRight: "auto",
        marginLeft: "2rem",
        fontSize: "60px",
        backgroundColor: "rgba(0, 0, 0, 0.80)",
        padding: "1rem",
        borderRadius: "50%",
        boxShadow: "1px 1px 5px #ebebeb",
        height: "150px",
        width: "150px",
      }}
    >
      {timer}
    </div>
  );
}

// useEffect(() => {
//   if (timer > 0) {
//     setTimeout(() => {
//       setTimer((timer) => timer - 1);
//     }, 1000);
//   }
// });

// useEffect(() => {

//   let interval = null;
//   if (timer > 0) {
//     interval = setInterval(() => {
//       setTimer((timer) => timer - 1);
//     }, 1000);
//   }
//   return () => clearInterval(interval);
// }, [runGame, timer]);
