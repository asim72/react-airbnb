import React from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Circle
} from "react-google-maps";

const GoogleMaps = ({coordinates}) => {
  return (
    <GoogleMap defaultZoom={13} defaultCenter={coordinates}>
      <Circle center={coordinates} radius={500}/>
    </GoogleMap>
  );
};

const WithGeoCode = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      coordinates: {
        lat: 0,
        lng: 0,
      },
    };

    getLocation() {
      const location = this.props.location;

      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: location }, (result, status) => {
        if (status === "OK") {
          const geometry = result[0].geometry.location;
          const coordinates = { lat: geometry.lat(), lng: geometry.lng() };
          this.setState({ coordinates });
        }
      });
    }
    render() {
     
      return <WrappedComponent {...this.state}/>;
    }
  };
};

export const MapWithAMarker = withScriptjs(
  withGoogleMap(WithGeoCode(GoogleMaps))
);
