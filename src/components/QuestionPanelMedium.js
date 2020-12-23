import React from "react";

export default function QuestionPanelMedium(props) {
  const { currentIndex, questionTracker } = props;
  console.log(questionTracker);

  const listItems = questionTracker.map((question, index) => {
    //current question
    if (question === "" && index === currentIndex) {
      return (
        <li
          style={{
            fontWeight: "bold",
            background: "#f57b02",
            borderRadius: "3px",
            width: "100px",
            height: "23px",
          }}
        >
          <div style={{ width: "37px", textAlign: "right", color: "white" }}>
            {index + 1}:&nbsp;
          </div>
        </li>
      );
    } else if (question === "") {
      // blank
      return (
        <li style={{ width: "100px", height: "23px" }}>
          <div style={{ color: "#fff", width: "100%" }}>
            <div style={{ width: "37px", textAlign: "right" }}>
              {index + 1}:&nbsp;
            </div>
            <div
              style={{
                width: "100%",
                textAlign: "center",
                color: "rgba(255, 0, 0, 0.85)",
              }}
            ></div>
          </div>
        </li>
      );
    } else if (question === "X") {
      // incorrect answer
      return (
        <li style={{ width: "100px", height: "23px" }}>
          <div
            style={{
              // height: "18px", // x height
              color: "#fff",
              width: "100%",
              display: "flex",
              alignItems: "center",
              margin: "1px 0px",
            }}
          >
            <div
              style={{
                width: "37px",
                textAlign: "right",
                alignItems: "center",
              }}
            >
              {index + 1}:&nbsp;
            </div>
            <div
              style={{
                lineHeight: "16px",
                height: "16px",
                flex: "1",
                textAlign: "center",
                color: "rgba(255, 0, 0, 0.85)",
                margin: "1px",
              }}
            >
              &#10060;
            </div>
          </div>
        </li>
      );
    } else {
      // correct answer
      return (
        <li style={{ width: "100px", height: "23px" }}>
          <div style={{ color: "#fff", display: "flex", alignItems: "center" }}>
            <div style={{ width: "37px", textAlign: "right" }}>
              {index + 1}:&nbsp;
            </div>
            <div
              style={{
                lineHeight: "20px",
                height: "20px",
                flex: "1",
                textAlign: "center",
                color: "rgba(24, 206, 0, 0.85)",
              }}
            >
              {" "}
              &#10004;
            </div>
          </div>
        </li>
      );
    }
  });

  return (
    <div
      style={{
        fontSize: "18px",
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
          padding: "0 10px",
          display: "flex",
          flexDirection: "column-reverse",
          width: "120px",
        }}
      >
        {listItems}
      </ul>
    </div>
  );
}
