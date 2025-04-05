import React from 'react';

function Question({ question, onAnswerSelect, questionNumber, totalQuestions }) {
  return (
    <div className="question">
      <div className="question-progress">
        Question {questionNumber} of {totalQuestions}
      </div>
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(option)}
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