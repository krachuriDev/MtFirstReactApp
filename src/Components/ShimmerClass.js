import React from "react";

export class ShimmerClass extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <img className="w-40 h-48 m-3 bg-gray-300"></img>
        <h2 className="w-32 h-3 m-3 bg-gray-300"></h2>
        <h3 className="w-32 h-3 m-3 bg-gray-300"></h3>
        <h3 className="w-32 h-3 m-3 bg-gray-300"></h3>
      </div>
    );
  }
}
