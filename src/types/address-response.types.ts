export interface AddressResponseType {
  response: Response
}

export interface Response {
  GeoObjectCollection: GeoObjectCollection
}

export interface GeoObjectCollection {
  featureMember: FeatureMember[]
  metaDataProperty: MetaDataProperty
}

export interface MetaDataProperty {
  GeocoderResponseMetaData: GeocoderResponseMetaData
}

export interface GeocoderResponseMetaData {
  found: string
  request: string
  results: string
}

export interface FeatureMember {
  GeoObject: GeoObject
}

export interface GeoObject {
  Point: Point
  boundedBy: BoundedBy
  description: string
  metaDataProperty: MetaDataProperty2
  name: string
  uri: string
}

export interface MetaDataProperty2 {
  GeocoderMetaData: GeocoderMetaData
}

export interface GeocoderMetaData {
  Address: Address
  AddressDetails: AddressDetails
  kind: string
  precision: string
  text: string
}

export interface Address {
  Components: Component[]
  country_code: string
  formatted: string
}

export interface Component {
  kind: string
  name: string
}

export interface AddressDetails {
  Country: Country
}

export interface Country {
  AddressLine: string
  AdministrativeArea?: AdministrativeArea
  Country?: Country2
  CountryName: string
  CountryNameCode: string
  Locality?: Locality3
}

export interface AdministrativeArea {
  AdministrativeAreaName: string
  Locality?: Locality
  SubAdministrativeArea?: SubAdministrativeArea
}

export interface Locality {
  Thoroughfare: Thoroughfare
}

export interface Thoroughfare {
  ThoroughfareName: string
}

export interface SubAdministrativeArea {
  Locality?: Locality2
  SubAdministrativeAreaName: string
}

export interface Locality2 {
  DependentLocality?: DependentLocality
  LocalityName?: string
}

export interface DependentLocality {
  DependentLocalityName: string
  Thoroughfare?: Thoroughfare2
}

export interface Thoroughfare2 {
  ThoroughfareName: string
}

export interface Locality3 {
  Premise: Premise
}

export interface Premise {
  PremiseName: string
}

export interface Country2 {
  Locality: Locality4
}

export interface Locality4 {}

export interface BoundedBy {
  Envelope: Envelope
}

export interface Envelope {
  lowerCorner: string
  upperCorner: string
}

export interface Point {
  pos: string
}
