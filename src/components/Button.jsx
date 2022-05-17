export default function Button() {
  return (
    <div>
      <button
        onClick={() => {
          console.log("clicked 1");
        }}
      >
        1
      </button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>0</button>
      <button>.</button>
      <button className="operator">x</button>
      <button className="operator">+</button>
      <button className="operator">-</button>
      <button className="operator">/</button>
      <button className="operator">C</button>
      <button className="equals">=</button>
    </div>
  );
}
