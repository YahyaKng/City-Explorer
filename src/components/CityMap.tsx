import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CityMap = ({ lat, lng }: { lat: number; lng: number }) => {
  const position = [lat, lng] as L.LatLngExpression;

  return (
    <div className="h-96 rounded shadow">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} />
      </MapContainer>
    </div>
  );
};

export default CityMap;
