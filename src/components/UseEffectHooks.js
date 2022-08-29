import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseEffectHooks = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  //   console.log("Render");
  const handleInnerWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleInnerWidth);

    return () => {
      window.removeEventListener("resize", handleInnerWidth);
    };
  }, []);

  return <div>{windowWidth}</div>;
};

export default UseEffectHooks;
