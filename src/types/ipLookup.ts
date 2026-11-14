// Coordinates and geographic information returned by IPify.
export interface IpLocation {
    city: string
    region: string
    timezone: string
    lat: number
    lng: number
}

// The information returned after a successful IP lookup.
export interface IpLookupResult {
    ip: string
    location: IpLocation
    isp: string
}
