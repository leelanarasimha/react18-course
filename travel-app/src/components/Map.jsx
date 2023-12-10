import { useNavigate, useSearchParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import styles from './Map.module.css';
import { useCity } from '../contexts/CityContext';
import { useState, useEffect } from 'react';

export default function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { cities } = useCity();
  const [mapPosition, setMapPosition] = useState([40, 0]);

  const mapLat = searchParams.get('lat');
  const mapLong = searchParams.get('long');

  function showForm() {
    navigate('/app/addcity');
  }

  useEffect(() => {
    if (mapLat && mapLong) setMapPosition([mapLat, mapLong]);
  }, [mapLat, mapLong]);

  return (
    <div onClick={showForm} style={{ height: '100%' }}>
      <MapContainer center={mapPosition} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker position={[city.latitude, city.longitude]} key={city.id}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
