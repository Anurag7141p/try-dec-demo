import React, { useState, useRef, useEffect } from 'react';
import { Autocomplete, useLoadScript } from '@react-google-maps/api';
import { IoLocationOutline } from 'react-icons/io5';
import { MdMyLocation } from 'react-icons/md';
import { CiTimer } from "react-icons/ci";
const Location = () => {
  const placesLibrary = ['places'];

  const [loading, setLoading] = useState(false);
  const [isAutocompleteFocused, setAutocompleteFocused] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [locationDetails, setLocationDetails] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const autocompleteRef = useRef();
  const dropdownRef = useRef();

  useEffect(() => {
    const storedSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    setRecentSearches(storedSearches);
  }, []);

  useEffect(() => {
    // Add event listener for clicks outside the dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    // Attach the event listener
    window.addEventListener('click', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
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
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const onGetCurrentLocationClick = () => {
    const handlePermission = (result) => {
      if (result.state === 'granted') {
        // Permission is granted, get the current location
        navigator.geolocation.getCurrentPosition(pos => {
          const { latitude, longitude } = pos.coords;
          const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
          fetch(url)
            .then(res => res.json())
            .then(data => {
              setLocationDetails({
                city: data.address.city || '',
                road: data.address.road || '',
                country: data.address.country || '',
              });

              // Autofill the input box with city, road, and country
              const formattedAddress = `${data.address.city || ''}, ${data.address.road || ''}, ${data.address.country || ''}`;
              setInputValue(formattedAddress);

              // Add the recent search to the list
              const updatedSearches = [formattedAddress, ...recentSearches.slice(0, 2)];
              setRecentSearches(updatedSearches);
              localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
            });
        });
      } else if (result.state === 'prompt') {
        // The user hasn't made a decision yet, so you can ask again
        alert('Please allow location access to use this feature.');
      } else {
        // Permission is denied
        alert('Location permission denied. Please allow location access to use this feature.');
      }
    };

    // Check for geolocation permission
    if (navigator.permissions) {
      navigator.permissions.query({ name: 'geolocation' }).then(handlePermission);
    } else {
      // Fallback for older browsers
      navigator.geolocation.getCurrentPosition(() => { }, (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          alert('Location permission denied. Please allow location access to use this feature.');
        }
      });
    }
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

    // Autofill the input box with the selected place
    setInputValue(formattedAddress);

    // Close the dropdown
    setDropdownOpen(false);
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-2 text-sm'>
      <div className='flex justify-center'>
        <div className='relative'>
          <div className='relative' ref={dropdownRef}>
            <Autocomplete
              onLoad={onAutocompleteLoad}
              onPlaceChanged={onAutocompletePlaceChanged}
              className='w-[280px]'
            >
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Search area, city and neighborhoods'
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className='p-1 relative absolute outline-none w-[280px] border-b'
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
                    className='py-1 px-2 hover:bg-gray-100 cursor-pointer rounded'
                    onClick={() => {
                      setInputValue(search);
                      setDropdownOpen(false);
                    }}
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
            <div className='div-dropdown shadow-2xl fixed bg-white rounded mt-1 lg:w-[280px] move-up-animation mt-4'>
              <div className='flex p-2 border-b border-gray-200 items-center'>
                <MdMyLocation size={20} className='text-gray-700'/>
                <div className='flex flex-col ms-2'>
                  <h1 onClick={onGetCurrentLocationClick} className='font-semibold cursor-pointer text-gray-700'>
                    Use Current location
                  </h1>
                </div>
              </div>
              {locationDetails && (
                <div className='font-medium hover:bg-gray-200'>
                </div>
              )}
              <div>
                <h1 className='text-gray-500 mb-1 px-6  mt-2'>Recent Location</h1>
                {recentSearches.map((search, index) => (
                 <div
                 key={index}
                 className='py-1 px-2 hover:bg-gray-200 cursor-pointer rounded py-2 border-b border-gray-200 '
                 onClick={() => {
                   setInputValue(search);
                   setDropdownOpen(false);
                 }}
               >
                 <h1 className='flex items-center px-2 font-medium'>
                   <CiTimer style={{strokeWidth: '1'}}/>
                   <span className='ml-1 '>{search}</span>
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
