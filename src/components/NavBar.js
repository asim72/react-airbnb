import React, {Component} from "react";
import { Link } from "react-router-dom";


import {logout} from '../actions/authActions'
import store from '../store/Store'


 class NavBar extends Component {
  render() {
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

          <Link className="item" to="/" onClick={() => {
            store.dispatch(logout())
        }}>
          Logout &nbsp;
          <i className="power off icon"></i>
        </Link>
      </div>
    </div>
    )
  }
}

export default NavBar