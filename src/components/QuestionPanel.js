import React, { useEffect } from "react";
const { questions } = require("../questions");

export default function QuestionPanel(props) {
  const { currentIndex } = props;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const listItems = questions.map((question) => {
    if (currentIndex == questions.id) {
      return (
        <li style={{ fontWeight: "bold", background: "#f57b02" }}>
          <span style={{ color: "black " }}>
            {questions.id}:&nbsp;{numberWithCommas(question.points)}
          </span>
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
        }}
      >
        {listItems}

        {/* <li style={{ color: "#fff" }}>15 $1,000,000</li>
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
        <li>1 $100</li> */}
      </ul>
    </div>
  );
}

// var list = document.getElementsByClassName("questionList").getElementsByTagName("li");
// for (var item of list) {
//   console.log(item);
// }
