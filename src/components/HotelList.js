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
      return <Hotel key={index} hotel={hotel} />;
    });
  };

  componentWillMount() {
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
