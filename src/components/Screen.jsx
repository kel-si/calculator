export default function Screen(props) {
  //convert to string to set a maximum length for the result
  const resultsStr = props.result.toString().substring(0, 9);
  return (
    <div className="calc-screen">
      <div className="result">{resultsStr}</div>
    </div>
  );
}
