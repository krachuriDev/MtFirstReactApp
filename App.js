import React from "react";
import ReactDOM from "react-dom/client";

/*
AppLayout
  Header
  -Logo
  -Navigation Items.
  Body
  -Search Component
  -Restro Component
    -Restro Card
      -Logo.
      -Name.
      -Cuisine.
      -Rating.
      -Delivery Time.
  -Pagination
  Footer
  CopyRight
  Various links like Socialmedia,Contact Us etc
*/

const Restro = () => {
  return (
    <div className="restroCard">
      <img
        className="restroLogo"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/s8lriomkmnw8zogjdqh2"
        alt="Error in loading Image"
      ></img>
      <h3>Mathrusri Tiffins</h3>
      <h4>Indian, Pan Asian</h4>
      <div className="restroDetails">
        <span>4.3*</span>
        <span>20 mins</span>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="searchRestro">
        <input
          className="searchTxt"
          type="search"
          placeholder="Search restuarant by name"
        ></input>
        <input className="searchBtn" type="button" value="Search"></input>
      </div>
      <div className="restroContainer">
        <Restro></Restro>
        <Restro></Restro>
        <Restro></Restro>
        <Restro></Restro>
        <Restro></Restro>
        <Restro></Restro>
        <Restro></Restro>
        <Restro></Restro>
        <Restro></Restro>
        <Restro></Restro>
        <Restro></Restro>
        <Restro></Restro>
        <Restro></Restro>
        <Restro></Restro>
        <Restro></Restro>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="headerDiv">
      <div className="logoContainer">
        <img
          className="logo"
          src="https://www.designevo.com/res/templates/thumb_small/simple-cup-crisp-cookie.png"
          alt="Failed to load the Image"
        ></img>
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Profile</li>
        </ul>
      </div>
    </div>
  );
};

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
