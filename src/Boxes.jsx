import React, { useState } from "react";
import Box from "./Box";
import "./Boxes.css";
const defColors = [
  "gold",
  "skyblue",
  "pink",
  "purple",
  "blue",
  "forestgreen",
  "yellow",
  "red",
  "orange",
  "indigo",
  "magenta",
];

const Boxes = ({ colors = defColors, numBoxes = 16 }) => {
  function choice(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  function randInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getInitialRandomColors() {
    const result = Array.from({ length: numBoxes }, () => choice(colors));
    console.log(result);
    return result;
  }
  function changeColor(e) {
    setBoxes((boxes) => {
      let idx = randInt(numBoxes);
      let boxCopy = [...boxes];
      boxCopy[idx] = choice(colors);
      return boxCopy;
    });
  }
  const [boxes, setBoxes] = useState(getInitialRandomColors);
  const boxElements = boxes.map((c, i) => <Box key={i} color={c} />);
  return (
    <div className="Boxes">
      {boxElements}
      <button onClick={changeColor} className="Boxes-btn">
        Change
      </button>
    </div>
  );
};

export default Boxes;
