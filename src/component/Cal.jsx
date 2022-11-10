import React, { useState } from "react";
import "./Cal.css";

export default function Cal() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const handleClear = () => {
    setResult("");
  };

  const handleBackspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const handleResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };
  return (
    <>
      <form>
        <input type="text" value={result} />
      </form>

      <div className="container">
        <button onClick={handleClear} id="clear" className="block">
          Clear
        </button>
        <button onClick={handleBackspace} id="backspace" className="block">
          C
        </button>
        <button name="/" onClick={handleClick} className="block">
          &divide;
        </button>
        <button name="7" onClick={handleClick} className="block">
          7
        </button>
        <button name="8" onClick={handleClick} className="block">
          8
        </button>
        <button name="9" onClick={handleClick} className="block">
          9
        </button>
        <button name="*" onClick={handleClick} className="block">
          &times;
        </button>
        <button name="4" onClick={handleClick} className="block">
          4
        </button>
        <button name="5" onClick={handleClick} className="block">
          5
        </button>
        <button name="6" onClick={handleClick} className="block">
          6
        </button>
        <button name="-" onClick={handleClick} className="block">
          &ndash;
        </button>
        <button name="1" onClick={handleClick} className="block">
          1
        </button>
        <button name="2" onClick={handleClick} className="block">
          2
        </button>
        <button name="3" onClick={handleClick} className="block">
          3
        </button>
        <button name="+" onClick={handleClick} className="block">
          +
        </button>
        <button name="0" onClick={handleClick} className="block">
          0
        </button>
        <button name="." onClick={handleClick} className="block">
          .
        </button>
        <button onClick={handleResult} id="result" className="block">
          =
        </button>
      </div>
    </>
  );
}
