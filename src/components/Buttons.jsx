//this file could definitely be more DRY

export default function Buttons(props) {
  return (
    <div className="calc-button-list">
      <button className="number" name="7" onClick={props.handleClick}>
        7
      </button>
      <button className="number" name="8" onClick={props.handleClick}>
        8
      </button>
      <button className="number" name="9" onClick={props.handleClick}>
        9
      </button>
      <button className="operator" name="/" onClick={props.assignOperator}>
        /
      </button>
      <button className="number" name="4" onClick={props.handleClick}>
        4
      </button>
      <button className="number" name="5" onClick={props.handleClick}>
        5
      </button>
      <button className="number" name="6" onClick={props.handleClick}>
        6
      </button>
      <button className="operator" name="*" onClick={props.assignOperator}>
        x
      </button>
      <button className="number" name="1" onClick={props.handleClick}>
        1
      </button>
      <button className="number" name="2" onClick={props.handleClick}>
        2
      </button>
      <button className="number" name="3" onClick={props.handleClick}>
        3
      </button>
      <button className="operator" name="+" onClick={props.assignOperator}>
        +
      </button>
      <button className="number longer" name="0" onClick={props.handleClick}>
        0
      </button>
      <button name="." onClick={props.addDecimal}>
        .
      </button>
      <button className="operator" name="-" onClick={props.assignOperator}>
        -
      </button>
      <button className="clear longer" name="AC" onClick={props.clearInput}>
        AC
      </button>
      <button className="longer" onClick={props.equals} name="=">
        =
      </button>
    </div>
  );
}
