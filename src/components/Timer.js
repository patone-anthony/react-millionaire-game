import React, { useEffect } from "react";

export default function Timer(props) {
  const { runTimer, setRunTimer } = props;
  const { timer, setTimer } = props;

  useEffect(() => {
    if (runTimer && timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);

      if (!runTimer) {
        setTimer(30);
        setRunTimer(true);
      }
    }
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
