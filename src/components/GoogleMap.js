import React from 'react';
import GoogleMapReact from 'google-map-react';

const arr=[{lat:32.1,lng:34.84,text:'כינוי'}]

const AnyReactComponent = ({ text }) => <h1> {text}</h1>;

export default function GoogleMap() {
  const defaultProps = {
    center: {
      lat:32.089731,
      lng:34.832381
    },
    zoom: 16 // Zoom level
  };

  return (
    <div style={{ height: '400px', width: '50%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD0y-2f3prjfXVnYibVVwWuq4ww2Z7azh8' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={32.189731}
          lng={34.832381}
          text="1 City"
        />
         <AnyReactComponent
          lat={32.089731}
          lng={34.831381}
          text="2 City"
        />
         <AnyReactComponent
          lat={32.089731}
          lng={34.832381}
          text="3 City"
        />
      </GoogleMapReact> 
    </div>
  );
};


