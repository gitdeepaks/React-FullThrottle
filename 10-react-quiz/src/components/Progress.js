import React from "react";

function Progress({ i, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={i + Number(answer !== null)} />
      <p>
        Question{" "}
        <stron>
          {" "}
          {/* It should be <strong> instead of <stron> */}
          {i + 1} /{numQuestions}
        </stron>
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
