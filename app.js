//import React from "react";
import ReactDOM from "react-dom/client";

/**
 * JSX coverts html kind of code similar to reat.create element
 * JSX => React.createElement => Object => HTML(DOM)
 */
const heading = (
  <h1 id="title" key="h1">
    Hello Namaste! from JSX
  </h1>
);

// Functional Component

const HeaderComponent = () => (
  <div>
    {heading}
    <h1>React functional component</h1>
    <h2>Multiple headings</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//async defer
root.render(<HeaderComponent />);
