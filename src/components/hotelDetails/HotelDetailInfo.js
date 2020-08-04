import React from "react";
import { Fragment } from "react";
import titleize from "titleize";

const HotelDetailInfo = ({ selectedHotel }) => {
  return (
    <Fragment>
      <div className="ui segment">
        <span className={`category ${selectedHotel.category}`}>
          {selectedHotel.shared ? "shared" : "entire"} {selectedHotel.category}
        </span>
        <p className="title">{selectedHotel.title}</p>
        <p className="city">{titleize(selectedHotel.city)}</p>
        <p className="bedrooms">
          <i className="plug icon"></i>
          {selectedHotel.bedroom} Bedrooms &nbsp;
          <i className="plug icon"></i> {selectedHotel.bedroom * 2} Guests
          &nbsp;
          <i className="plug icon"></i>
          {selectedHotel.bedroom + 2} Beds &nbsp;
        </p>
        <p className="description">Hello</p>
      </div>
    </Fragment>
  );
};

export default HotelDetailInfo;
