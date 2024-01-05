import React, { useState } from 'react';
import GooglePlacesAutocomplete, { geocodeByPlaceId } from 'react-google-places-autocomplete';

const LocationSearch = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [error, setError] = useState(null);

  const handleSelect = async (place) => {
    try {
      const results = await geocodeByPlaceId(place.place_id);
      setSelectedLocation(results);
    } catch (err) {
      setError('Error retrieving location details');
      console.error('Error retrieving location details:', err);
    }
  };

  return (
    <div>
      <GooglePlacesAutocomplete
        apiKey={import.meta.env?.VITE_LOCATION_API_KEY}
        selectProps={{
          selectedLocation,
          onChange: setSelectedLocation,
          onSelect: handleSelect,
          onError: (status, clearSuggestions) => {
            setError('Failed to load suggestions');
            clearSuggestions();
          },
        }}
        autocompletionRequest={{
          types: ['(cities)'],
          componentRestrictions: { country: 'us' },
        }}

        placeholder="Enter a location"
        debounce={300}
        minLengthAutocomplete={2}
        renderSuggestions={(active, suggestions, onSelectSuggestion) => (
          <div className="custom-suggestions-container">
            {active && suggestions.map((suggestion) => (
              <div
                key={suggestion.placeId}
                onClick={() => onSelectSuggestion(suggestion, 'click')}
                className="custom-suggestion-item "
              >
                {suggestion.description}
              </div>
            ))}
          </div>
        )}
      />
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default LocationSearch;