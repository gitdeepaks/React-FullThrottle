import React from "react";

function FinishScreen({ points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <p className="result">
      You Scored <stron>{points}</stron> out of {maxPossiblePoints} (
      {Math.ceil(percentage)})
    </p>
  );
}

export default FinishScreen;
