import { useEffect } from 'react'
import {
    MapContainer,
    TileLayer,
    Marker,
    useMap,
} from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Import marker images so Vite includes them in the production build.
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

// Configure the marker using bundled image URLs.
const locationIcon = L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIconRetina,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
})

// Default map location before a search.
const initialPosition: [number, number] = [40.7128, -74.0060]

interface MapProps {
    latitude?: number
    longitude?: number
}

// Move the map when the search result coordinates change.
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
    const currentLatitude = latitude ?? initialPosition[0]
    const currentLongitude = longitude ?? initialPosition[1]

    const position: [number, number] = [
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
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Recenter the map after each successful lookup. */}
            <MapUpdater
                latitude={currentLatitude}
                longitude={currentLongitude}
            />

            {/* Use an explicitly configured marker icon. */}
            <Marker position={position} icon={locationIcon} />
        </MapContainer>
    )
}

export default Map
