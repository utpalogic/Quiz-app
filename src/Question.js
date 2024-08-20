import React from "react";

function Question({ question, handleAnswerOptionClick }) {
  return (
    <div className="question-container">
      <h2>{question.questionText}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerOptionClick(option)}
            className="option-button"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
