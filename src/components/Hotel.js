import React, { Component } from "react";
import { Link } from "react-router-dom";

class Hotel extends Component {
  render() {
    const { hotel } = this.props;
    return (
      <div
        className="card "
        style={{
          width: 270,
          marginTop: 20,
        }}
      >
        <Link to={`/hotel/${hotel._id}`}>
          <div className="image">
            <img
              src={hotel.image}
              style={{ width: 270, height: 270 }}
              alt="#"
            />
          </div>
          <div className="content">
            <div className="meta">
              <span className={`category ${hotel.category}`}>
                {hotel.shared ? "shared" : "entire"} {hotel.category}
              </span>
            </div>
            <b className="header">{hotel.title}</b>
            <div className="meta">
              <span className="date">
                {hotel.street}. {hotel.city}
              </span>
            </div>
            <div className="description">
              ${hotel.dailyRate} per night | Free Cancellation
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Hotel;
