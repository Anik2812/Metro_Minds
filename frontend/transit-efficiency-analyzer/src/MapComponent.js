// src/MapComponent.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './MapComponent.css';

const busIcon = new L.Icon({
  iconUrl: require('./bus-school.png'),
  iconSize: [25, 25],
  iconAnchor: [12, 12],
  popupAnchor: [0, -10],
});

const MapComponent = ({ filter }) => {
  const [gtfsData, setGtfsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/gtfs_data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setGtfsData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const filteredData = gtfsData.filter(entity => {
    const vehicle = entity.vehicle;
    const routeId = vehicle && vehicle.trip && vehicle.trip.route_id;
    return routeId && routeId.includes(filter);
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <MapContainer center={[28.682318, 77.03235]} zoom={13} style={{ height: '80vh', width: '100%' }}>
      <TileLayer
        url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {filteredData.map((entity, index) => {
        const vehicle = entity.vehicle;
        const position = vehicle && vehicle.position;
        const vehicleLabel = vehicle && vehicle.label;
        if (position && position.latitude && position.longitude) {
          return (
            <Marker key={index} position={[position.latitude, position.longitude]} icon={busIcon}>
              <Popup>
                <div>
                  <p>Vehicle ID: {vehicleLabel}</p>
                  <p>Route ID: {vehicle.trip && vehicle.trip.route_id}</p>
                  <p>Latitude: {position.latitude}</p>
                  <p>Longitude: {position.longitude}</p>
                  <p>Speed: {position.speed}</p>
                </div>
              </Popup>
            </Marker>
          );
        }
        return null;
      })}
    </MapContainer>
  );
};

export default MapComponent;
