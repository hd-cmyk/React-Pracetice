import "./App.css";
import { useState } from "react";
function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}
export default App;
function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setpercentage1] = useState(0);
  const [percentage2, setpercentage2] = useState(0);
  const tip = ((percentage1 + percentage2) / 2) * bill * 0.01;
  function handleReset() {
    setBill(0);
    setpercentage1(0);
    setpercentage2(0);
  }
  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <Percentage percentage={percentage1} setpercentage={setpercentage1}>
        How did you like the service?
      </Percentage>
      <Percentage percentage={percentage2} setpercentage={setpercentage2}>
        How did your friend like the service?
      </Percentage>
      {/* 若bill为假，如0、null、undefined、""、bill && (...) 的结果就是 bill 本身 */}
      {bill && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset reset={handleReset} />
        </>
      )}
    </div>
  );
}
function Bill({ bill, setBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}
function Percentage({ children, percentage, setpercentage }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => setpercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip}(${bill} + $B {tip})
    </h3>
  );
}
function Reset({ reset }) {
  return <button onClick={reset}>Reset</button>;
}
