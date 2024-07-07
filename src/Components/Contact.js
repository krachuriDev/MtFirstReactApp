import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
    <div>
      <h2 className="p-4 m-4 font-bold">Contact Us</h2>
    </div>
    <form>
      <input type="text" className="p-2 m-2 border border-black rounded-lg" placeholder="Enter your name"></input>
      <input type="text" className="p-2 m-2 border border-black rounded-lg" placeholder="Enter your email"></input><br/>
      <textarea placeholder="Enter your message here" className="p-2 m-2 border border-black rounded-lg"></textarea><br/>
      <button className="p-2 m-2 border border-black rounded-lg bg-gray-200">Submit</button>
    </form>    
    </React.Fragment>
  );
};

export default Contact;
