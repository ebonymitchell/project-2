import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

// Match the original tracker's starting location: New York City.
const initialPosition: [number, number] = [40.7128, -74.0060]

function Map() {
    return (
        <MapContainer
            center={initialPosition}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
        >
            {/* Display the same OpenStreetMap tiles used in the original tracker. */}
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Place a marker at the initial location. */}
            <Marker position={initialPosition} />
        </MapContainer>
    )
}

export default Map
