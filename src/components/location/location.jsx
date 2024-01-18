import React, { useState, useRef, useEffect } from 'react';
import { Autocomplete, useLoadScript } from '@react-google-maps/api';
import { IoLocationOutline } from 'react-icons/io5';
import { MdMyLocation } from 'react-icons/md';

const Location = () => {
  const placesLibrary = ['places'];

  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [loading, setLoading] = useState(false);
  const [isAutocompleteFocused, setAutocompleteFocused] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [locationDetails, setLocationDetails] = useState(null);

  const autocompleteRef = useRef();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    libraries: placesLibrary,
  });

  const onAutocompleteLoad = (autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  const onAutocompletePlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      onPlaceChanged(place);
    }
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const onPlaceChanged = (place) => {
    const { geometry } = place;
    const { location } = geometry;
    const latitude = location.lat();
    const longitude = location.lng();

    setPosition({ latitude, longitude });

    setLocationDetails({ latitude, longitude, address: place.formatted_address });
  };

  const handleGetLocationClick = () => {
    setLoading(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLoading(false);
      });
    } else {
      console.log('Geolocation is not available in your browser.');
      setLoading(false);
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-2 text-xs '>
      <div className='flex justify-center'>
        <div className='relative'>
          <div className='relative'>
            <Autocomplete onLoad={onAutocompleteLoad} onPlaceChanged={onAutocompletePlaceChanged}>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Search Area, city, or neighborhood'
                  className='p-1 rounded-lg border-2 relative absolute '
                  onFocus={() => setAutocompleteFocused(true)}
                  onBlur={() => setAutocompleteFocused(false)}
                />
                <div className='absolute right-0.5 top-1/2 transform -translate-y-1/2'>
                  {/* Dropdown icon for opening/closing */}
                  <div onClick={handleDropdownToggle} className='cursor-pointer'>
                    {isDropdownOpen ? '▲' : '▼'}
                  </div>
                </div>
              </div>
            </Autocomplete>
            {isAutocompleteFocused && (
              <div className={`absolute  top-full left-0 bg-white border border-gray-300 mt-1 p-2 z-20 ${isDropdownOpen ? 'block' : 'hidden'}`}>
                {/* Render autocomplete items here */}
              </div>
            )}
          </div>
          {isDropdownOpen && (
            <div className='div-dropdown shadow-2xl fixed  bg-white rounded mt-1 w-[150px] move-up-animation'>
              <div className='flex p-1'>
                <MdMyLocation color='blue' size={15} />
                <div className='flex flex-col'>
                  <h1 onClick={handleGetLocationClick} className='font-semibold text-blue-600 cursor-pointer '>
                    Use Current location
                  </h1>
                  <h1>
                    {' '}
                    Latitude: {position.latitude},<br /> Longitude: {position.longitude}
                  </h1>
                </div>
              </div>
              <div className='flex flex-col gap-1'>
                <h1 className='text-gray-500 ms-4'>Recently Used</h1>
                <div>
                  <h1 className='pl-1 flex items-center'>
                    <span>
                      <IoLocationOutline />
                    </span>
                    <span className='text-md font-bold '>Kaloor, Ernakulam</span>
                  </h1>
                </div>
              </div>
              {locationDetails && (
                <div className='ms-3'>
                  <h5>Location Details:</h5>
                  <p>Latitude: {locationDetails.latitude}</p>
                  <p>Longitude: {locationDetails.longitude}</p>
                  <p>Address: {locationDetails.address}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Location;
