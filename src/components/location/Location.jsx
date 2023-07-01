"use client"

import React, { useState } from 'react';

const Location = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handleLocationSuccess,
        handleLocationError
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  const handleLocationSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    setLocation({ latitude, longitude });
    setError(null);
  };

  const handleLocationError = (error) => {
    setError(error.message);
  };

  return (
    <div>
      <button onClick={handleLocationClick}>Detect Location</button>
      {location && (
        <div>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </div>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Location;
