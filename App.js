{/* <div id="parent">
  <div id="child">
    <h1>I'm an h1 tag</h1>
    <h2>I'm and h2 tag</h2>
  </div>
  <div id="child2">
    <h1>I'm and h1 tag</h1>
    <h2>I'm an h2 tag</h2>
  </div>
</div> */}

// const heading = React.createElement("h1", { id: 'heading' }, "Hello World from React");
// console.log(heading);

const parent = React.createElement("div", { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")]),
    React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")])
  ]
)
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
rootElement.render(parent);