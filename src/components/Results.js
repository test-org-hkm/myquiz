import React from 'react';

function Results({ score, onRestart }) {
  return (
    <div className="results">
      <h2>Quiz Completed!</h2>
      <p>Your score: {score} out of 5</p>
      <p>Percentage: {(score / 5) * 100}%</p>
      <button onClick={onRestart} className="restart-button">
        Try Again
      </button>
    </div>
  );
}

export default Results; 