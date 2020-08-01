import React, { Component } from "react";

class Items extends Component {
  render() {
    return (
      <div className="card " style={{width: 270 ,marginTop: 20}}>
        <div className="image">
          <img src="assets/1.jpg" />
        </div>
        <div className="content">
          <a className="header">Some Good Appt</a>
          <div className="meta">
            <span className="date">Wall Street . Washington</span>
          </div>
          <div className="description">$240 per night | Free Cancellation</div>
        </div>
        <div className="extra content">
          <a style={{ color: "green" }}>
            <i className="user icon"></i>
            More Info
          </a>
        </div>
      </div>
    );
  }
}

export default Items;
