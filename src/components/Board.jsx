import React from "react";
import Square from "./Square";
import { useState } from "react";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  // console.log(state[0]);
  function handleClick(index) {
    console.log(index, " is clicked");
    // let currentState = [...state];
    // setState({ currentState: "X" });
  }
  return (
    <>
      <div className="boardRow">
        <Square onClick={() => handleClick(0)} value={state[0]} />
        <Square onClick={() => handleClick(1)} value={state[1]} />
        <Square onClick={() => handleClick(2)} value={state[2]} />
      </div>
      <div className="boardRow">
        <Square onClick={() => handleClick(3)} value={state[3]} />
        <Square onClick={() => handleClick(4)} value={state[4]} />
        <Square onClick={() => handleClick(5)} value={state[5]} />
      </div>
      <div className="boardRow">
        <Square onClick={() => handleClick(6)} value={state[6]} />
        <Square onClick={() => handleClick(7)} value={state[7]} />
        <Square onClick={() => handleClick(8)} value={state[8]} />
      </div>
    </>
  );
};

export default Board;
