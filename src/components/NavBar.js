import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="ui fixed inverted menu teal">
      <Link to="/" className="item">
        BookWithMe
      </Link>

      <Link to="/" className="item">
        Messages
      </Link>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>

        <Link className="item" to="/">
          Logout &nbsp;
          <i className="power off icon"></i>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
