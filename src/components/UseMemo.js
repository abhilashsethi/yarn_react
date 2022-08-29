import React from "react";
import { useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = slowFunction(number);
  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div>
      <input
        type="number"
        className="border-2 border-rose-600 border-solid"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />
      <button
        className="bg-teal-400 rounded-2xl p-2"
        onClick={() => setDark((prevDark) => !prevDark)}
      >
        Change Theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
};

const slowFunction = (num) => {
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
};

export default UseMemo;
