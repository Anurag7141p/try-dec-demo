import React, { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { getLocationAddress, getUserCountryData } from "../../utils/locationUtils";

const Map = ({ setFieldValue }) => {
  const [markerPosition, setMarkerPosition] = useState({
    lat: 10.10764,
    lng: 76.35158,
  });

  const [mapCenter, setMapCenter] = useState({ lat: 10.10764, lng: 76.35158 });
  const libraries = ["places"];
  const [clickedLocationAddress, setClickedLocationAddress] = useState("");
  const mapRef = React.useRef();

  const onMapLoad = React.useCallback((map) => {
    map.setOptions({
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    });
    mapRef.current = map;
  }, []);

  const mapContainerStyle = {
    width: "100%",
    height: "250px",
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env?.VITE_GOOGLE_MAP_API_KEY,
    libraries,
  });

  useEffect(() => {
    getUserCountryData(setFieldValue);
  }, []);

  useEffect(() => {
    const getCurrentLocation = async () => {
      try {
        if ("geolocation" in navigator) {
          const position = await navigator.geolocation.getCurrentPosition(
            (position) => {
              setMarkerPosition({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
              setMapCenter({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });

              // Log the current location details to the console
              console.log("Current Location Details:", {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });

              // Convert coordinates to address
              getLocationAddress(
                position.coords.latitude,
                position.coords.longitude,
                setClickedLocationAddress
              );
            }
          );
        } else {
          console.log("Geolocation is not supported in this browser.");
        }
      } catch (error) {
        console.error("Error getting user's location:", error);
      }
    };

    getCurrentLocation();
  }, []);

  const handleMapClick = async (event) => {
    try {
      const { latLng } = event;
      setMarkerPosition({
        lat: latLng.lat(),
        lng: latLng.lng(),
      });

      setMapCenter({
        lat: latLng.lat(),
        lng: latLng.lng(),
      });

      // Convert coordinates to address
      getLocationAddress(latLng.lat(), latLng.lng(), setClickedLocationAddress);
    } catch (error) {
      console.error("Error handling map click:", error);
    }
  };

  useEffect(() => {
    setFieldValue("lat", markerPosition.lat);
    setFieldValue("lng", markerPosition.lng);
  }, [markerPosition]);

  useEffect(() => {
    setFieldValue("locationAddress", clickedLocationAddress);
  }, [clickedLocationAddress]);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={mapCenter}
        onClick={handleMapClick}
        onLoad={onMapLoad}
        onDragStart={false}
      >
        <MarkerF
          position={markerPosition}
          icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
        />
      </GoogleMap>
      <p className="border-collapse mt-2 border-solid border-gray-900 border-2 p-2">
        Address: {clickedLocationAddress}
      </p>
    </div>
  );
};

export default Map;
