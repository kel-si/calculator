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
    const decimal = e.target.name;
    setInput({
      ...input,
      number: input.number.toString().includes(".")
        ? input.number // will not add another decimal if one is already present
        : input.number + decimal,
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
          ? "0" // prevents multiple leading zeros
          : input.number % 1 === 0 // whole number?
          ? Number(input.number + value) //convert to number and add to current number
          : input.number + value, // add to current number
      result: input.operator ? input.result : 0,
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

  //click AC button; resets default state
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
      return num1 / num2;
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
