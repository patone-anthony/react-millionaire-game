import React, { useEffect } from "react";
const { questions } = require("../questions");

export default function QuestionPanel(props) {
  const { currentIndex, userScore, setUserScore } = props;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const listItems = questions.map((question) => {
    if (currentIndex + 1 == question.id) {
      return (
        <li style={{ fontWeight: "bold", background: "#f57b02", borderRadius: "3px" }}>
          <span style={{ color: "white" }}>{question.id}:&nbsp;</span>
          <span style={{ color: "black" }}>${numberWithCommas(question.points)}</span>
        </li>
      );
    }
    if (question.id === 1 || question.id === 5 || question.id === 10 || question.id === 15) {
      return (
        <li>
          <span style={{ color: "#fff" }}>
            {question.id}:&nbsp;${numberWithCommas(question.points)}
          </span>
        </li>
      );
    } else {
      return (
        <li>
          {question.id}:&nbsp;${numberWithCommas(question.points)}
        </li>
      );
    }
  });

  return (
    <div
      style={{
        fontSize: "24px",
        backgroundColor: "rgba(0, 0, 0, 0.80)",
        color: "rgba(255, 255, 255, 0.80)",
        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "1px 1px 5px #ebebeb",
        margin: "0 2rem 0 Auto ",
      }}
    >
      <ul
        className="questionList"
        style={{
          listStyle: "none",
          padding: "10px",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        {listItems}
      </ul>
    </div>
  );
}
