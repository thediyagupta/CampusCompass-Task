import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "100vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}

export default App;

