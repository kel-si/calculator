import { useState } from "react";

import Screen from "./Screen";
import Buttons from "./Buttons";

import "../styles/index.css";

export default function Container() {
  let [input, setInput] = useState({
    operator: "", //+ - * /
    number: 0, // what is currently being entered
    result: 0, //result of calculation
  });

  //ability to add a decimal place
  function addDecimal(e) {
    setInput({
      ...input,
      number: !input.number.toString().includes(".")
        ? input.number + e.target.name
        : input.number,
    });
  }

  //click number button
  function handleClick(e) {
    e.preventDefault();
    const value = e.target.name;
    setInput({
      ...input,
      number:
        input.number === 0 && value === "0"
          ? "0"
          : input.number % 1 === 0
          ? Number(input.number + value)
          : input.num + value,
      result: !input.operator ? 0 : input.result,
    });
  }

  //click operator
  function assignOperator(e) {
    setInput({
      ...input,
      operator: e.target.name,
      result: !input.response && input.number ? input.number : input.result,
      number: 0,
    });
  }

  //click AC button
  function clearInput(e) {
    if (e.target.name === "AC") {
      setInput({ ...input, operator: "", number: 0, result: 0 });
    }
  }

  //calculate result
  function calculate(num1, num2, operator) {
    if (operator === "+") {
      return num1 + num2;
    }
    if (operator === "-") {
      return num1 - num2;
    }
    if (operator === "*") {
      return num1 * num2;
    }
    if (operator === "/") {
      return (num1 / num2).toFixed(3);
    }
  }

  //when equal button is clicked
  function equals() {
    if (input.number && input.operator) {
      setInput({
        ...input,
        result: calculate(
          Number(input.result),
          Number(input.number),
          input.operator
        ),
        number: 0,
      });
    }
  }

  console.log("input", input);
  console.log("number", input.number);
  console.log("result", input.result);

  return (
    <div className="calc-container">
      <Screen result={input.number ? input.number : input.result} />
      <Buttons
        handleClick={handleClick}
        number={input.number}
        clearInput={clearInput}
        assignOperator={assignOperator}
        equals={equals}
        addDecimal={addDecimal}
      />
    </div>
  );
}
