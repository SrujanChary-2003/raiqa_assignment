import { useState, useEffect } from "react";
import "./index.css";
import Counter from "./components/Counter";
import ListView from "./components/ListView";

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(() => {
    const saved = localStorage.getItem("numbers");
    return saved ? JSON.parse(saved) : [];
  });
  const [ascending, setAscending] = useState(true);

  useEffect(() => {
    localStorage.setItem("numbers", JSON.stringify(numbers));
  }, [numbers]);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => (c > 0 ? c - 1 : 0));

  const addNumber = () => {
    if (count > 0 && !numbers.includes(count)) {
      setNumbers((prev) => [...prev, count]);
      setCount(0);
    }
  };

  const resetList = () => setNumbers([]);
  const toggleSort = () => setAscending((prev) => !prev);

  return (
    <div className="app">
      <h1>Counter & List App</h1>
      <Counter
        count={count}
        increment={increment}
        decrement={decrement}
        addNumber={addNumber}
      />
      <ListView
        numbers={numbers}
        ascending={ascending}
        toggleSort={toggleSort}
        resetList={resetList}
      />
    </div>
  );
}

export default App;
