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
      style={{
        marginRight: "auto",
      }}
    >
      <div
        className="center"
        style={{
          fontSize: "24px",
          margin: "2rem",
          backgroundColor: "rgba(0, 0, 0, 0.80)",
          color: "rgba(255, 255, 255, 0.80)",
          padding: "1rem",
          borderRadius: "10px",
          boxShadow: "1px 1px 5px #ebebeb",
          height: "60px",
          width: "60px",
        }}
      >
        {timer}
      </div>
    </div>
  );
}
