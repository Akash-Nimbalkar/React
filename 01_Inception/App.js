// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );

//console.log(heading);

//const root = ReactDOM.createRoot(document.getElementById("root"));

//    root.render(heading);

/**
 *   <div id=parent>
 *
 *      <div id=child>
 *           <h1>This is react class 1</h1>
 *           <h2>This is h2 tag</h2>
 *      </div>
 *   </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag")
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);

root.render(parent);


