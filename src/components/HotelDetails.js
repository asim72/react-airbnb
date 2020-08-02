import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selected_hotel} from "../actions/hotelActions";

const mapState = (state) => ({
  selectedHotel: state.hotel.selectedHotel,
});

const actions = {
  selected_hotel,
};

class HotelDetails extends Component {
  componentWillMount() {
    this.props.selected_hotel(this.props.match.params.id);
  }

  render() {
    const { selectedHotel } = this.props;
    return selectedHotel ? (
      <div style={{ paddingTop: 80 }}>
        <h1>Title: {selectedHotel.title} </h1>
        <h1>Daily Rate</h1>
        <h1>Street</h1>
      </div>
    ) : (
      <div style={{ paddingTop: 80 }}>
        <h1>No Data</h1>
      </div>
    );
  }
}

export default withRouter(connect(mapState, actions)(HotelDetails));
