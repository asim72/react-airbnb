import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selected_hotel } from "../actions/hotelActions";
import HotelDetailAssets from "./hotelDetails/HotelDetailAssets";
import HotelDetailImageMap from "./hotelDetails/HotelDetailImageMap";
import HotelDetailInfo from "./hotelDetails/HotelDetailInfo";
import NavBar from "../components/NavBar";
import HotelDetailBooking from "./hotelDetails/HotelDetailBooking";

const mapState = (state) => ({
  selectedHotel: state.hotel.selectedHotel,
});

const actions = {
  selected_hotel,
};

class HotelDetails extends Component {
  UNSAFE_componentWillMount() {
    this.props.selected_hotel(this.props.match.params.id);
  }

  render() {
    const { selectedHotel } = this.props;
    return selectedHotel ? (
      <Fragment>
        <NavBar />
        <div style={{ paddingTop: 80 }} className="ui container">
          <HotelDetailImageMap selectedHotel={selectedHotel} />
          <div className="ui grid">
            <div className="ten wide column">
              <HotelDetailInfo selectedHotel={selectedHotel} />
              <hr />
              <HotelDetailAssets />
            </div>
            <div className="six wide column">
              <HotelDetailBooking />
            </div>
          </div>
        </div>
      </Fragment>
    ) : (
      <div style={{ paddingTop: 200 }}>
        <div className="ui active centered inline loader"></div>
        <h2 style={{ paddingLeft: 450 }}>Loading Documents...</h2>
      </div>
    );
  }
}

export default withRouter(connect(mapState, actions)(HotelDetails));
