import React from "react";

export default function GameOver(props) {
  const { setStartGame, userScore, setUserScore } = props;
  const handleClick = () => {
    setStartGame(1);
    setUserScore(0);
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
        <h1 style={{ textAlign: "center", margin: "1rem" }}>Game Over!</h1>
        <br />
        <h3
          style={{
            textAlign: "center",
            fontSize: "30px",
          }}
        >
          Your score was <span style={{ color: "orange" }}>{userScore} points</span>!
        </h3>

        <br />
        <br />
        <h6
          style={{
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          Play again?
        </h6>
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
            zIndex: "2",
            cursor: "pointer",
            fontSize: "22px",
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
}
