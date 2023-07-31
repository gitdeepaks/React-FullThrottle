import React from "react";

function Questions({ question }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="optoins">
        {question.options.map((option) => (
          <button className="btn btn-option" key={option}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Questions;
