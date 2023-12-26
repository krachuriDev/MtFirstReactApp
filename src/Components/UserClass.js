import React from "react";
import { ShimmerClass } from "./ShimmerClass";
import { USERINFO_API_URL } from "../Utils/constants";

class UserClass extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: null,
        location: null,
        avatar_url: null,
      },
    };
    console.info("child constructor called");
  }

  async componentDidMount() {
    const user = await fetch(USERINFO_API_URL);

    const userData = await user.json();

    this.setState({
      userInfo: userData,
    });

    this.timerId = setInterval(() => {
      console.info("child componentDidMount called");
    }, 1000);

    console.info(userData);
  }

  componentDidUpdate() {
    //Perform any actions based on the state & prop change values(by comparing old & new values) like invoking a network request based on a condition.
    console.info("child componentDidUpdate called");
  }

  componentWillUnmount() {
    // Perform any clean-up such as invalidating timers, cancelling network requests & cleaning up
    //  any subscriptions made in the componentDidMount methods.
    console.info("child componentWillUnmount called");
    clearInterval(this.timerId);
  }

  render() {
    console.info("child render called");

    const { name, location, avatar_url } = this.state.userInfo;

    return name === null ? (
      <ShimmerClass></ShimmerClass>
    ) : (
      <div className="p-3 border border-solid border-gray-400 w-max bg-emerald-200 text-black">
        <img
          src={avatar_url}
          height="100px"
          width="200px"
          alt="Image cannot be loaded"
        ></img>
        <h2>Name:- {name}</h2>
        <h3>Location:- {location}</h3>
        <h3>Contact:- xxxxxxxxxxx</h3>
      </div>
    );
  }
}

export default UserClass;

/*
----------Mounting-------------
Constructor(dummy)
  Render() with dummy data.
    <HTML(dummy)>
  ComponentDidMount
    <API Call>
    <this.setState() is invoked and the state has been changed.
---------Updating--------------
    render() with API data
    DOM gets updated with the API data.
    ComponentDidUpdate() gets called once the DOM updates are completed.

*/
