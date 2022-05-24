export default function Screen(props) {
  //convert to string to set a maximum length for the result
  const resultsStr = props.result.toString();

  //check length of digits in front of decimal place (too big of a number?) cut off extra decimal places if needed
  const wholeNum = resultsStr.split(".");

  return (
    <div className="calc-screen">
      <div className="result">
        {wholeNum[0].length > 8 ? "ERROR" : resultsStr.substring(0, 9)}
      </div>
    </div>
  );
}
