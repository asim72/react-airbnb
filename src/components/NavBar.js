import React from "react";

const NavBar = () => {
  return (
    <div className="ui fixed inverted menu teal">
      <a href="#" className=" item">
        BookWithMe
      </a>
      <a href="#" className="item">
        Messages
      </a>
      <a href="#" className="item">
        Friends
      </a>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>
        <a href="#" className="ui item">
          Logout &nbsp;
          <i className="power off icon"></i>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
