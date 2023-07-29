import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Appv2 from "./Appv2";

import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />;
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Appv2 />
    {/* <StarRating
      maxRating={"ss"}
      messages={["terrible", "bad", "okey", "good", "Amazing"]} */}
    {/* // /> */}
    {/* <StarRating size={24} color="red" className="test" defaultRating={3} /> */}
    {/* <StarRating maxRating={10} /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
