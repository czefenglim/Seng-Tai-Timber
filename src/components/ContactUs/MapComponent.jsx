import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '20px', 
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' 
};

const center = {
  lat: 2.0809544268327578,
  lng: 102.5802883252413
};

function MapComponent() {
  return (
    <div className="p-4 md:p-10 bg-[#FAF4EF] rounded-2xl">
      <LoadScript googleMapsApiKey="AIzaSyAm64t0Bc4tBn4IpiRu86mOqcRQ84u7oKA">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default MapComponent;
