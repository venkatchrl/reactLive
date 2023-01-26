/*
WHAT DOES PARCEL DO?
--------------------
HMR - hot module reloading
file watch algorithm
bundling
minify
cleaning our code
Dev and prod build
super and fast build algorithm
image optimisation
caching whle development
compression
compatable with older version of browsers
HTTPS on dev
consistent caching algorithm
zero config
transitive dependencies
*/

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { id: "title1" },
  " Namaste Everyone- This is delivered by parcel bundler "
);
const heading2 = React.createElement(
  "h2",
  { id: "title2" },
  "Welcome to React"
);
const container = React.createElement("div", {id:"container"}, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);