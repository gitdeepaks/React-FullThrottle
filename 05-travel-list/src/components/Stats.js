import React from "react";

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = (numPacked / numItems) * 100;
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everyrthing! Ready to go ✈️"
          : `🧳 You have ${numItems} Items on your List packed ${numPacked} (
            ${percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
