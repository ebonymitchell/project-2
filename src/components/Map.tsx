import { useEffect } from 'react'
import {
    MapContainer,
    TileLayer,
    Marker,
    useMap,
} from 'react-leaflet'
import type { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Coordinates passed from the IP lookup results.
interface MapProps {
    latitude?: number
    longitude?: number
}

// Default location before the user searches.
const initialPosition: LatLngExpression = [40.7128, -74.0060]

// Recenter the Leaflet map when the searched location changes.
function MapUpdater({
    latitude,
    longitude,
}: {
    latitude: number
    longitude: number
}) {
    const map = useMap()

    useEffect(() => {
        map.setView([latitude, longitude], 13)
    }, [map, latitude, longitude])

    return null
}

function Map({ latitude, longitude }: MapProps) {
    const currentLatitude = latitude ?? 40.7128
    const currentLongitude = longitude ?? -74.0060

    const position: LatLngExpression = [
        currentLatitude,
        currentLongitude,
    ]

    return (
        <MapContainer
            center={initialPosition}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
        >
            {/* Display the OpenStreetMap map tiles. */}
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Update the map center after a successful search. */}
            <MapUpdater
                latitude={currentLatitude}
                longitude={currentLongitude}
            />

            {/* Move the marker to the searched coordinates. */}
            <Marker position={position} />
        </MapContainer>
    )
}

export default Map
