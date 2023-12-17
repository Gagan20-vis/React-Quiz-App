import { useState } from "react";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState(0);
  const question = [
    {
      description: "What is the capital of India.",
      option: [
        { answertext: "Mumbai", isCorrect: false },
        { answertext: "Kolkata", isCorrect: false },
        { answertext: "Banglore", isCorrect: false },
        { answertext: "Delhi", isCorrect: true },
      ],
    },
    {
      description: "who is the CEO of Google.",
      option: [
        { answertext: "Elon Musk", isCorrect: false },
        { answertext: "Mark Zukerberg", isCorrect: false },
        { answertext: "Sunder Pichai", isCorrect: true },
        { answertext: "Andy Jassy", isCorrect: false },
      ],
    },
    {
      description: "What is the No. 1 University for Engineering in the world.",
      option: [
        { answertext: "MIT", isCorrect: true },
        { answertext: "Standford", isCorrect: false },
        { answertext: "University of California", isCorrect: false },
        { answertext: "Cambridge", isCorrect: false },
      ],
    },
    {
      description: "Which was the first OS of mirosoft.",
      option: [
        { answertext: "Windows XP", isCorrect: false },
        { answertext: "Windows 2000", isCorrect: false },
        { answertext: "Windows Vista", isCorrect: false },
        { answertext: "MS DOS", isCorrect: true },
      ],
    },
  ];
  const handleChoice = (ind) => {
    if (ind) setResult(result + 1);
    setIndex(index + 1);
  };
  return (
    <>
      <div className="app">
        {index == question.length ? (
          <div className="score-section">
            You have Scored {result} out of {question.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {index + 1}</span>/{question.length}
              </div>
              <div className="question-text">{question[index].description}</div>
            </div>
            <div className="answer-section">
              {question[index].option.map((x, key) => (
                <button
                  className="my-2"
                  onClick={() => handleChoice(x.isCorrect)}
                >
                  {x.answertext}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
