import React from "react";
import { useState } from "react";

const Square = () => {
  const [value, setValue] = useState(null);
  function handleClick() {
    // console.log("clicked !");
    setValue("X");
  }
  return (
    <div className="square" onClick={handleClick}>
      {value}
    </div>
  );
};

export default Square;
