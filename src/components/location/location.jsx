import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function HomeLocation() {
  const libraries = ['places'];

  const mapContainerStyle = {
    width: '100vw',
    height: '80vh',
  };

  const center = {
    lat: 10.10764000,
    lng: 76.35158000,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env?.VITE_LOCATION_API_KEY,
    libraries,
  });

  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMapClick = (event) => {
    const latitude = event.latLng.lat();
    const longitude = event.latLng.lng();
  
    console.log('Latitude:', latitude);
    console.log('Longitude:', longitude);
  
    setSelectedMarker({
      lat: latitude,
      lng: longitude,
    });
  };
  

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div className='flex flex-col justify-center w-auto gap-[5rem]'>
      <h1 className='flex justify-center text-3xl font-bold'>Store Location</h1>
      <form className='flex justify-center flex-col gap-5'>
        <div className='flex justify-center gap-5'>
          <label htmlFor='name'>Name :</label>
          <input className='border-2 w-[15rem]' type='text' id='name' />
        </div>
        <div className='flex flex-col justify-center items-center gap-6'>
          <h3>Mark your Location:</h3>
          <div className='flex w-[70%] h-[20%]'>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={10}
              center={center}
              onClick={handleMapClick}
            >
              {selectedMarker && <Marker position={selectedMarker} />}
            </GoogleMap>
          </div>
        </div>
      </form>
    </div>
  );
}

export default HomeLocation;
