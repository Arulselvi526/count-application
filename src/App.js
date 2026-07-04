import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className={darkMode ? "container dark" : "container"}>
      <div className="card">
        <h2>COUNTER APPLICATION</h2>
        <h1>{count}</h1>
      </div>

      <p className="message">
        {count === 0
          ? "Minimum Limit Reached"
          : count === 30
          ? "Max(30) Reached"
          : "Minimum Limit Reached Max(30)"}
      </p>

      <div className="buttons">
        <button onClick={increment}>+ Increment</button>
        <button onClick={decrement}>- Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Lightmode" : "Darkmode"}
        </button>
      </div>
    </div>
  );
}

export default App;