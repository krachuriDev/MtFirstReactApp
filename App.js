import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";

const AppLayout = () => {
  return (
    <div className="appLayout">
      {/* Need to place header, body & footer Component  */}
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(<AppLayout></AppLayout>);
