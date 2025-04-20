import {User, UserVals} from "./user";
import {Wave, WaveVals} from "./wave";
import {_Event, EventFilter, EventVals} from "./event";
import {ParticipantConnection, ParticipantQuery, ParticipantVals} from "./participant";
import {Image, ImageVals} from "./image";
import {StationsConnection, StationVals} from "./stations";
import {StreamQueue, Streams} from "./stream";
import {TeamConnection, TeamQuery, TeamVals} from "./team";
import {PageInfo, PageInfoVals} from "./pageInfo";

/**
 * @param distanceFrom distance from Latitude, Longitude (ex. 37, 29)
 * @param distance radius of distance to search from (ex. 50mi)*/
export type TournamentLocationFilter = {
  distanceFrom: string
  distance: string
}

/**
 * @param gameNums filter based on # top game (ex. [2,3] filters on 2nd and 3rd top games)
 *  */
export type TopGameFilter = {
  gameNums?: [number]
}

export type TournamentLinks = {
  facebook: string
  discord: string
}

export type TournamentSort = "startAt" | "endAt" | "eventRegistrationClosesAt" | "computedUpdatedAt"

export type TournamentPage = {
  page: number
  perPage: number
  sortBy: string
}

/**
 * @param id tournament id
 * @param ids list of tournament ids*/
export type TournamentFilter = {
  id: string
  ids: [string]
  ownerId: string
  isCurrentUserAdmin: boolean
  countryCode: string
  addrState: string
  location: TournamentLocationFilter
  afterDate: number
  beforeDate: number
  computedUpdatedAt: number
  name: string
  venueName: string
  isFeatured: boolean
  isLeague: boolean
  hasBannerImages: boolean
  activeShops: boolean
  regOpen: boolean
  past: boolean
  published: boolean
  publiclySearchable: boolean
  staffPicks: boolean
  hasOnlineEvents: boolean
  topGames: TopGameFilter
  upcoming: boolean
  videogameIds: [string]
  sortByScore: boolean
}


export type TournamentConnection = {
  tournaments: {
    pageInfo: PageInfo
    nodes: [Tournament]
  }
}

export type TournamentConnectionVals = {
  pageInfo: Partial<PageInfoVals>
  nodes: Partial<TournamentVals>
}

export type TournamentVals = {
  id: boolean
  addrState: boolean
  admins: { roles: "administrator" | "owner", userVals: UserVals }
  city: boolean
  countryCode: boolean
  createdAt: boolean
  currency: boolean
  endAt: boolean
  eventRegistrationClosedAt: boolean
  events: { limit: number, filter: EventFilter, eventVals: EventVals }
  hasOfflineEvents: boolean
  hasOnlineEvents: boolean
  isOnline: boolean
  hashtag: boolean
  images: { type: "profile" | "banner", imageVals: Partial<ImageVals> }
  isRegistrationOpen: boolean
  lat: boolean
  lng: boolean
  mapsPlaceId: boolean
  links: TournamentLinks
  name: boolean
  numAttendees: boolean
  owner: User
  participants: { query: ParticipantQuery, isAdmin: boolean, participantVals: ParticipantVals }
  postalCode: boolean
  primaryContact: boolean
  primaryContactType: boolean
  publishing: JSON
  registrationClosesAt: boolean
  rules: boolean
  shortSlug: boolean
  slug: boolean
  startAt: boolean
  state: boolean
  stations: { page: boolean, perPage: boolean, stationsVals: StationVals }
  streamQueue: [StreamQueue]
  streams: [Streams]
  teamCreationClosesAt: boolean
  teams: { query: TeamQuery, teamVals: TeamVals }
  timezone: boolean
  tournamentType: boolean // needs docs
  updatedAt: boolean
  url: { tab: string, relative: boolean }
  venueAddress: boolean
  venueName: boolean
  waves: WaveVals
}

export type Tournament = {
  id: string
  addrState: string
  admins: [User]
  city: string
  countryCode: string
  createdAt: number
  currency: string
  endAt: number
  eventRegistrationClosedAt: number
  events: [_Event]
  hasOfflineEvents: boolean
  hasOnlineEvents: boolean
  isOnline: boolean
  hashtag: string
  images: [Image]
  isRegistrationOpen: boolean
  lat: number
  lng: number
  mapsPlaceId: string
  links: TournamentLinks
  name: string
  numAttendees: number
  owner: User
  participants: ParticipantConnection
  postalCode: string
  primaryContact: string
  primaryContactType: string
  publishing: JSON
  registrationClosesAt: number
  rules: string
  shortSlug: string
  slug: string
  startAt: number
  state: number
  stations: StationsConnection
  streamQueue: [StreamQueue]
  streams: [Streams]
  teamCreationClosesAt: number
  teams: TeamConnection
  timezone: string
  tournamentType: number // needs docs
  updatedAt: number
  url: { tab: string, relative: boolean }
  venueAddress: string
  venueName: string
  waves: [Wave]
}