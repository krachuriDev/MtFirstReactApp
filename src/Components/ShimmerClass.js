import React from "react";

export class ShimmerClass extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="shimmer-class-container">
        <img className="shimmer-img-card"></img>
        <h2 className="shimmer-heading-card"></h2>
        <h3 className="shimmer-heading-card"></h3>
        <h3 className="shimmer-heading-card"></h3>
      </div>
    );
  }
}
