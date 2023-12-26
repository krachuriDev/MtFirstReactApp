import UserClass from "./UserClass";
import React from "react";

// const About = () => {
//   return (
//     <div>
//       {/* <h2>This is a sample practice application built on React</h2> */}
//       <UserClass name={"Karthik(class)"} location={"Hyderabad"}></UserClass>
//     </div>
//   );
// };

class AboutClass extends React.Component {
  constructor() {
    console.info("Parent constructor called");
    super();
  }

  componentDidMount() {
    console.info("Parent componentDidMount called");
  }

  render() {
    console.info("Parent render called");
    return (
      <div>
        <h2>This is a sample practice application built on React</h2>
        {<UserClass></UserClass>}
      </div>
    );
  }
}

export default AboutClass;
