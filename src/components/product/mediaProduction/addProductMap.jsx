import React, { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
// import { getLocationAddress } from "../../utils/locationUtils";

const AddProductMap = () => {
  const [formikFieldValues, setFieldValue] = useState({
    lat: "",
    lng: "",
    locationAddress: "",
  });
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
    width: "90%",
    height: "220px",
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env?.VITE_GOOGLE_MAP_API_KEY,
    libraries,
  });

  const getCurrentLocation = async () => {
    try {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const coords = await position.coords;
          if (coords) {
            setMarkerPosition({
              lat: coords.latitude,
              lng: coords.longitude,
            });
            setMapCenter({
              lat: coords.latitude,
              lng: coords.longitude,
            });
          }
        });
      } else {
        console.log("Geolocation is not supported in this browser.");
      }
    } catch (error) {
      console.error("Error getting user's location:", error);
    }
  };

  useEffect(() => {
    if (!formikFieldValues.lat || formikFieldValues.lat === "") {
      getCurrentLocation();
      return;
    }
    if (
      formikFieldValues.lat &&
      formikFieldValues.lng &&
      formikFieldValues.locationAddress
    ) {
      setClickedLocationAddress(formikFieldValues.locationAddress);
      setMarkerPosition({
        lat: formikFieldValues.lat,
        lng: formikFieldValues.lng,
      });
      setMapCenter({
        lat: formikFieldValues.lat,
        lng: formikFieldValues.lng,
      });
    }
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
    } catch (error) {
      console.error("Error handling map click:", error);
    }
  };

  useEffect(() => {
    // getLocationAddress(
    //   markerPosition.lat,
    //   markerPosition.lng,
    //   setClickedLocationAddress
    // );
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
      {/* <p className="border-collapse mt-2 border-solid border-gray-400 border p-2 ">
        Address: {clickedLocationAddress}
      </p> */}
    </div>
  );
};

export default AddProductMap;
