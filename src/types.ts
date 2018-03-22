
export interface Location {
  latitude: number
  longitude: number
}

export interface Place {
  identifier: string
  name: string
  position: Location
}