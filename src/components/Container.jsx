import { useState } from "react";

import Screen from "./Screen";
import Buttons from "./Buttons";

import "../styles/index.css";

export default function Container() {
  let [input, setInput] = useState({
    operator: "",
    number: 0,
    result: "0",
  });

  function handleClick(e) {
    setInput({ result: input.result.concat(e.target.name) });
  }

  function clearInput(e) {
    if (e.target.name === "AC") {
      setInput({ result: "0" });
    }
  }

  return (
    <div className="calc-container">
      <Screen result={input.number ? input.number : input.result} />
      <Buttons
        handleClick={handleClick}
        number={input.number}
        clearInput={clearInput}
      />
    </div>
  );
}
