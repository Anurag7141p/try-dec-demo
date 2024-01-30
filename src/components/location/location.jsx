import React, { useState, useRef, useEffect } from 'react';
import { Autocomplete, useLoadScript } from '@react-google-maps/api';
import { IoLocationOutline } from 'react-icons/io5';
import { MdMyLocation } from 'react-icons/md';

const MAX_DISPLAY_LENGTH = 30; // Set the maximum length for displayed location

const Location = () => {
  const placesLibrary = ['places'];

  const [loading, setLoading] = useState(false);
  const [isAutocompleteFocused, setAutocompleteFocused] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [locationDetails, setLocationDetails] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);

  const autocompleteRef = useRef();

  useEffect(() => {
    const storedSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    setRecentSearches(storedSearches);
  }, []);

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
    console.log(place);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const onPlaceChanged = (place) => {
    const formattedAddress = place.formatted_address || place.description;
    setLocationDetails({ address: formattedAddress });

    // Update recent searches
    if (!recentSearches.includes(formattedAddress)) {
      const updatedSearches = [formattedAddress, ...recentSearches.slice(0, 2)];
      setRecentSearches(updatedSearches);
      localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    }
  };

  const handleSuggestionClick = async (selectedLocation) => {
    try {
      // Set the selected location to Autocomplete
      if (autocompleteRef.current) {
        const placeService = new window.google.maps.places.PlacesService(document.createElement('div'));
        const request = {
          placeId: selectedLocation,
          fields: ['formatted_address', 'geometry'],
        };

        const place = await new Promise((resolve, reject) => {
          placeService.getDetails(request, (result, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              resolve(result);
            } else {
              reject(new Error(`Error fetching place details: ${status}`));
            }
          });
        });

        // Manually reset Autocomplete and trigger onPlaceChanged
        autocompleteRef.current.setOptions({ placeIdOnly: false });
        autocompleteRef.current.setFields(['formatted_address', 'geometry']);
        autocompleteRef.current.input.value = place.formatted_address;
        onPlaceChanged(place);
      }
    } catch (error) {
      console.error(error);
    }

    setDropdownOpen(false);
    setAutocompleteFocused(false);
  };

  const handleGetLocationClick = async () => {
    setLoading(true);
    try {
      if ('geolocation' in navigator) {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (position) => resolve(position),
            (error) => reject(error)
          );
        });

        const { latitude, longitude } = position.coords;

        // Reverse geocode the coordinates to get the address
        const geocoder = new window.google.maps.Geocoder();
        const location = await new Promise((resolve, reject) => {
          geocoder.geocode({ location: { lat: latitude, lng: longitude } }, (results, status) => {
            if (status === window.google.maps.GeocoderStatus.OK) {
              resolve(results[0]);
            } else {
              reject(new Error(`Geocode failed due to: ${status}`));
            }
          });
        });

        setLocationDetails({
          address: location.formatted_address,
          latitude,
          longitude,
        });
      } else {
        console.log('Geolocation is not available in your browser.');
      }
    } catch (error) {
      console.error('Error getting current location:', error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-2 text-sm'>
      <div className='flex justify-center'>
        <div className='relative'>
          <div className='relative'>
            <Autocomplete
              onLoad={onAutocompleteLoad}
              onPlaceChanged={onAutocompletePlaceChanged}
              className='w-[300px]'  // Adjust the width as needed
            >
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Search area, city and neighborhoods'
                  className='p-1 relative absolute outline-none w-full border-b'
                  onBlur={() => setAutocompleteFocused(false)}
                />


                <div className='absolute left-64 top-1/2 transform -translate-y-1/2'>
                  <div onClick={handleDropdownToggle} className='cursor-pointer'>
                    {isDropdownOpen ? '▲' : '▼'}
                  </div>
                </div>
              </div>
            </Autocomplete>

            {isAutocompleteFocused && (
              <div className={`absolute top-full left-0 bg-white border border-gray-300 mt-1 p-2 z-20 ${isDropdownOpen ? 'block' : 'hidden'}`}>
                {recentSearches.map((search, index) => (
                  <div
                    key={index}
                    onClick={() => handleSuggestionClick(search)}
                    className='py-1 px-2 hover:bg-gray-100 cursor-pointer rounded'
                  >
                    <h1 className='flex items-center text-md font-semibold'>
                      <IoLocationOutline />
                      <span className='ml-1'>{search}</span>
                    </h1>
                  </div>
                ))}
              </div>
            )}
          </div>
          {isDropdownOpen && (
            <div className='div-dropdown shadow-2xl fixed bg-white rounded mt-1 lg:w-[300px] move-up-animation mt-4'>
              <div className='flex p-2 border-b border-gray-300 items-center'>
                <MdMyLocation size={20} />
                <div className='flex flex-col ms-2'>
                  <h1 onClick={handleGetLocationClick} className='font-semibold cursor-pointer'>
                    Use Current location
                  </h1>
                </div>
              </div>
              {locationDetails && (
                <div className='p-3 px-8 font-medium hover:bg-gray-200'>
                  {locationDetails.latitude && <p>Latitude: {locationDetails.latitude}</p>}
                  {locationDetails.longitude && <p>Longitude: {locationDetails.longitude}</p>}
                </div>
              )}
              <div className='flex flex-col p-2'>
                <h1 className='text-gray-500 mb-1'>Recently Used</h1>
                {recentSearches.map((search, index) => (
                  <div key={index} className='py-1 px-2 hover:bg-gray-100 cursor-pointer rounded'>
                    <h1 className='flex items-center text-md font-semibold'>
                      <IoLocationOutline />
                      <span className='ml-1'>{search}</span>
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Location;
