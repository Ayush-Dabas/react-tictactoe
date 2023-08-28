import React from "react";
import Square from "./Square";
import { useState } from "react";

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  return (
    <div>
      <div className="boardRow">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="boardRow">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="boardRow">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default Board;
