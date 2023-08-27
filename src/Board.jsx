import React from "react";
import Square from "./Square";

const Board = () => {
  return (
    <div>
      <div className="boardRow">
        <Square value="" />
        <Square value="" />
        <Square value="" />
      </div>
      <div className="boardRow">
        <Square value="" />
        <Square value="" />
        <Square value="" />
      </div>
      <div className="boardRow">
        <Square value="" />
        <Square value="" />
        <Square value="" />
      </div>
    </div>
  );
};

export default Board;
