import React, { Component } from "react";
import Hotel from "./Hotel";
import { connect } from "react-redux";
import { fetch_hotels } from "../actions/hotelActions";

const mapState = (state) => ({
  hotels: state.hotel.data,
});

const actions = {
  fetch_hotels,
};

class HotelList extends Component {
  renderHotels = () => {
    return this.props.hotels.map((hotel, index) => {
      return this.props.hotels ? (
        <Hotel key={index} hotel={hotel} />
      ) : (
         <div>
          <div className="ui active centered inline loader"></div>
          <h2 style={{ paddingLeft: 450 }}>Loading Documents...</h2>
        </div>
      );
    });
  };

  UNSAFE_componentWillMount() {
    this.props.fetch_hotels();
  }

  render() {
    return (
      <div>
        <h1 style={{ paddingTop: 80 }}>Your Home All Around The World</h1>

        <div className="ui link  fluid cards">{this.renderHotels()}</div>
      </div>
    );
  }
}

export default connect(mapState, actions)(HotelList);
