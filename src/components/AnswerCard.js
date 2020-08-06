import React from "react";

export default function AnswerCard() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        fontSize: "24px",
        marginTop: "1rem",
        textAlign: "center",
        justifyItems: "center",
        gridGap: "1rem",
        zIndex: "2",
      }}
    >
      <div
        className="questionChoice"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.80)",
          width: "80%",
          position: "relative",
          height: "60px",
          justifyItems: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ color: "orange" }}>A:&nbsp;</span> Answer 1
        <div
          style={{
            color: "rgba(255, 255, 255, 0.80)",
            position: "absolute",
            left: "-30px",
            top: "0px",
            width: "0",
            height: "0",
            borderTop: "30px solid transparent",
            borderBottom: "30px solid transparent",
            borderRight: "30px solid rgba(0, 0, 0, 0.80)",
          }}
        ></div>
        <div
          style={{
            color: "rgba(255, 255, 255, 0.80)",
            position: "absolute",
            right: "-30px",
            top: "0px",
            width: "0",
            height: "0",
            borderTop: "30px solid transparent",
            borderBottom: "30px solid transparent",
            borderLeft: "30px solid rgba(0, 0, 0, 0.80)",
          }}
        ></div>
      </div>

      <div
        className="questionChoice"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.80)",
          width: "80%",
          position: "relative",
          height: "60px",
          justifyItems: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ color: "orange" }}>B:&nbsp;</span> Answer 2
        <div
          style={{
            color: "rgba(255, 255, 255, 0.80)",
            position: "absolute",
            left: "-30px",
            top: "0px",
            width: "0",
            height: "0",
            borderTop: "30px solid transparent",
            borderBottom: "30px solid transparent",
            borderRight: "30px solid rgba(0, 0, 0, 0.80)",
          }}
        ></div>
        <div
          style={{
            color: "rgba(255, 255, 255, 0.80)",
            position: "absolute",
            right: "-30px",
            top: "0px",
            width: "0",
            height: "0",
            borderTop: "30px solid transparent",
            borderBottom: "30px solid transparent",
            borderLeft: "30px solid rgba(0, 0, 0, 0.80)",
          }}
        ></div>
      </div>

      <div
        className="questionChoice"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.80)",
          width: "80%",
          position: "relative",
          height: "60px",
          justifyItems: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ color: "orange" }}>C:&nbsp;</span> Answer 3
        <div
          style={{
            color: "rgba(255, 255, 255, 0.80)",
            position: "absolute",
            left: "-30px",
            top: "0px",
            width: "0",
            height: "0",
            borderTop: "30px solid transparent",
            borderBottom: "30px solid transparent",
            borderRight: "30px solid rgba(0, 0, 0, 0.80)",
          }}
        ></div>
        <div
          style={{
            color: "rgba(255, 255, 255, 0.80)",
            position: "absolute",
            right: "-30px",
            top: "0px",
            width: "0",
            height: "0",
            borderTop: "30px solid transparent",
            borderBottom: "30px solid transparent",
            borderLeft: "30px solid rgba(0, 0, 0, 0.80)",
          }}
        ></div>
      </div>

      <div
        className="questionChoice"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.80)",
          width: "80%",
          position: "relative",
          height: "60px",
          justifyContent: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ color: "orange" }}>D:&nbsp;</span> Answer 4
        <div
          style={{
            color: "rgba(255, 255, 255, 0.80)",
            position: "absolute",
            left: "-30px",
            top: "0px",
            width: "0",
            height: "0",
            borderTop: "30px solid transparent",
            borderBottom: "30px solid transparent",
            borderRight: "30px solid rgba(0, 0, 0, 0.80)",
          }}
        ></div>
        <div
          style={{
            color: "rgba(255, 255, 255, 0.80)",
            position: "absolute",
            right: "-30px",
            top: "0px",
            width: "0",
            height: "0",
            borderTop: "30px solid transparent",
            borderBottom: "30px solid transparent",
            borderLeft: "30px solid rgba(0, 0, 0, 0.80)",
          }}
        ></div>
      </div>
    </div>
  );
}
