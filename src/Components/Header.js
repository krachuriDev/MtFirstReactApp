import { LOGO_URL } from "../Utils/constants";

const Header = () => {
  return (
    <div className="headerDiv">
      <div className="logoContainer">
        <img
          className="logo"
          src={LOGO_URL}
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

export default Header;
