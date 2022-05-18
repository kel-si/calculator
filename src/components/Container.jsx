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
    setInput({ operator: "", number: 0, result: e.target.name });
    console.log("e", e.target.name);
  }

  return (
    <div className="calc-container">
      <Screen result={input.number ? input.number : input.result} />
      <Buttons handleClick={handleClick} number={input.number} />
    </div>
  );
}
