import React from "react";

const CellStatus = {
  UNPICKED: "lightblue",
  CORRECT: "lightgreen",
  WRONG: "pink",
};

const CellOpacity = {
  HIDE: 0,
  SHOW: 1,
};

function PickAnswer({ options, text, value, correctAnswer, onClick }) {
  let cellStatus = CellStatus.UNPICKED;
  let cellOpacity = CellOpacity.SHOW;

  let height = Math.floor(220 / options);

  if (value.length > 0) {
    if (value === text) {
      if (text === correctAnswer) {
        cellStatus = CellStatus.CORRECT;
      } else {
        cellStatus = CellStatus.WRONG;
      }
    } else {
      if (text === correctAnswer) {
        cellStatus = CellStatus.CORRECT;
      } else {
        cellOpacity = CellOpacity.HIDE;
      }
    }
  }

  return (
    <div
      style={{
        backgroundColor: cellStatus,
        opacity: cellOpacity,
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: height,
        maxHeight: 80,
        color: "white",
        outline: "none",
        border: "none",
        cursor: "pointer",
        marginTop: 12,
        fontSize: 24,
      }}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

export default PickAnswer;
