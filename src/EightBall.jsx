import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");
  const handleClick = () => {
    const idx = Math.floor(Math.random() * answers.length);
    setMsg(answers[idx].msg);
    setColor(answers[idx].color);
  };
  const handleReset = () => {
    setMsg("Think of a Question");
    setColor("black");
  };
  return (
    <>
      <div
        onClick={handleClick}
        className="EightBall"
        style={{ backgroundColor: color }}
      >
        <b>{msg}</b>
      </div>
      <button onClick={handleReset} className="EightBall-btn">
        Reset
      </button>
    </>
  );
};
export default EightBall;
