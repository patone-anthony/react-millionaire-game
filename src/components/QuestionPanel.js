import React from "react";

export default function QuestionPanel() {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        fontSize: "24px",
        backgroundColor: "rgba(0, 0, 0, 0.80)",
        color: "rgba(255, 255, 255, 0.80)",
        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "1px 1px 5px #ebebeb",
        margin: "1rem 1rem 0 0 ",
      }}
    >
      <ul
        className="questionList"
        style={{
          listStyle: "none",
        }}
      >
        <li style={{ color: "#fff" }}>15 $1,000,000</li>
        <li>14 $500,000</li>
        <li>13 $250,0000</li>
        <li>12 $125,000</li>
        <li>11 $64,000</li>
        <li style={{ color: "#fff" }}>10 $32,000</li>
        <li>9 $16,000</li>
        <li>8 $8,000</li>
        <li>7 $4,000</li>
        <li>6 $2,000</li>
        <li style={{ color: "#fff" }}>5 $1,000</li>
        <li>4 $500</li>
        <li>3 $300</li>
        <li>2 $200</li>
        <li>1 $100</li>
      </ul>
    </div>
  );
}
