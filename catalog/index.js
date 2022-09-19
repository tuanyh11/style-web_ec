import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  { 
    path: "/color",
    title: 'Color',
    content: pageLoader(() => import("./Color.md"))
  }, 
  {
    path: "/typography",
    title: 'Typography',
    content: pageLoader(() => import("./Typography.md"))
  }
];

ReactDOM.render(
  <Catalog title="Style Guide" pages={pages} />,
  document.getElementById("catalog")
);
