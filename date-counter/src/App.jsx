import "./style.css";
import { useState } from "react";
export default function App() {
  return (
    <div className="app">
      <Count />
    </div>
  );
}
function Count() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  // function display() {
  //   let s;
  //   if (count > 0) s = count + " days from today is ";
  //   else if (count < 0) s = count + " days ago was ";
  //   else s = "Today is ";
  //   return s;
  // }
  return (
    <div>
      {" "}
      <div>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>step:{step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count:{count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
