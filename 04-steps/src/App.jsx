import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage>
        <p>Pass in context</p>
        <p>🤞</p>
      </StepMessage>
      <StepMessage>
        <p>Read children prop</p>
        <p>😎</p>
      </StepMessage>
    </div>
  );
}
function Steps() {
  const [step, setStep] = useState(1);
  const [test, setTest] = useState({ name: "Jonas" });
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    // setStep(step - 1);
    setStep((s) => s - 1);
  }
  function handleNext() {
    // setStep(step + 1);
    setStep((s) => s + 1);
    setTest({ name: "Elena" });
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>
            {messages[step - 1]} {test.name}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
                text=""
              >
                Learn how
              </Button>
            </div>
          </StepMessage>
          <div className="buttons">
            <Button
              bgColor={"#7958f2"}
              textColor={"#fff"}
              onClick={handlePrevious}
            >
              👈<span>Previous</span>
            </Button>
            <Button bgColor={"#7958f2"} textColor={"#fff"} onClick={handleNext}>
              <span>Next</span>👉
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}
function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
