import { useState } from "react";

export default function Screen(props) {
  console.log("props", props);
  return (
    <div className="calc-screen">
      <div className="result">{props.result}</div>
    </div>
  );
}
