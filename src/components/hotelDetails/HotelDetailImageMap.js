import React, { Fragment, Component } from "react";
import HotelMap from "../maps/HotelMap";

class HotelDetailImageMap extends Component {
  render() {
    const { selectedHotel } = this.props;
    return (
      <Fragment>
        <div className="ui grid">
          <div className="ten wide column">
            <img
              src={selectedHotel.image}
              style={{ width: 700, height: 350 }}
              alt="#"
            />
          </div>
          <div className="six wide column">
            <HotelMap
              location={`${selectedHotel.city}`}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HotelDetailImageMap;
