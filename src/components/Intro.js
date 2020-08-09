import React from "react";

export default function Intro(props) {
  const { setStartGame } = props;

  const handleClick = () => {
    setStartGame(1);
  };

  return (
    <div
      className="intro"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        position: "absolute",
        zIndex: "1",
      }}
    >
      <div
        style={{
          flex: "column",
          width: "40%",
          height: "auto",
          backgroundColor: "rgba(0, 0, 0, 0.80)",
          color: "rgba(255, 255, 255, 0.80)",
          padding: "1rem  2rem 1rem 2rem",
          borderRadius: "20px",
          boxShadow: "1px 1px 5px #ebebeb",
          marginTop: "-7rem",
        }}
      >
        <h1 style={{ textAlign: "center", margin: "1rem" }}>
          Welcome to GRO Who Wants to be a Millionaire!
        </h1>
        <br />
        <p>
          There are a total of 15 questions and you will be given 30 seconds to answer each
          question.
        </p>
        <br />
        <br />
        <p>Each question is worth 10 points.</p>
        <br />
        <br />
        <p>When you're ready, press the start button to begin.</p>
        <br />
        <button
          className="startButton"
          onClick={handleClick}
          style={{
            height: "40px",
            width: "140px",
            background: "rgba(30, 255, 0, 0.7)",
            margin: "1rem Auto",
            borderRadius: "10px",
            border: "none",
            display: "block",
            boxShadow: "1px 1px 5px #ebebeb",
            fontSize: "24px",
            zIndex: "2",
            cursor: "pointer",
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
}
