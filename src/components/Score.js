import React, { useState } from "react";

export default function Score(props) {
  const [userScore, setUserScore] = useState(0);

  return (
    <div
      className="center"
      style={{
        fontSize: "32px",
        backgroundColor: "rgba(0, 0, 0, 0.80)",
        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "1px 1px 5px #ebebeb",
        height: "80px",
        minWidth: "200px",
      }}
    >
      Score: &nbsp;<span style={{ color: "orange" }}>{userScore}</span>
    </div>
  );
}
