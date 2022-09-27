import React from "react";
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 33.9668538380403,
      lng: -6.881263028543214
    },
    zoom: 17
  };

  return (
    // Important! Always set the container height explicitly
    <div class="Map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={33.9668538380403}
          lng={-6.881263028543214}
          text="ISTA HAY RIAD"
        />
      </GoogleMapReact>
    </div>
  );
}