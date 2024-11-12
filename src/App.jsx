import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [count, setCount] = useState(0);

  // Update count directly when customCount changes using the button
  const handleClickCount = () => {
    setCount(Number(inputValue)); // Set count directly to the custom count value
  };

  const countReducer = (type) => {
    switch (type) {
      case "increment":
        setCount((prev) => prev + 1);
        break;
      case "decrement":
        setCount((prev) => prev - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="app-section">
      <h1>count Value {count}</h1>

      <button onClick={() => countReducer("increment")}>Increment</button>
      <button onClick={() => countReducer("decrement")}>Decrement</button>
      <input
        type="number"
        name="number"
        placeholder="enter number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => handleClickCount()}>Set Custom Count</button>
      {count < 0 && <>count goes below zero</>}
    </div>
  );
}

export default App;
