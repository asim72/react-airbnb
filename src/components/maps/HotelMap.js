import React from "react";
import { MapWithAMarker } from "./MapWithAMarker";

const HotelMap = ({ location }) => {
  return (
    <MapWithAMarker
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBagFWxx-eTA1Fqb2ZBpROLRfZuRSsSxtA&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `350px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      location={location}
    />
  );
};

export default HotelMap;
