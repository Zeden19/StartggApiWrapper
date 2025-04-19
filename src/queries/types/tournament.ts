import {User} from "./user";
import {Wave} from "./wave";
import {_Event, EventFilter} from "./event";
import {Participant, ParticipantConnection, ParticipantQuery} from "./participant";
import {Image} from "./image";
import {Station, StationsConnection} from "./stations";
import {StreamQueue, Streams} from "./stream";
import {Team, TeamConnection, TeamQuery} from "./team";

/**
 * @param distanceFrom distance from Latitude, Longitude (ex. 37, 29)
 * @param distance radius of distance to search from (ex. 50mi)*/
export type TournamentLocationFilter = {
  distanceFrom?: string
  distance?: string
}

/**
 * @param gameNums filter based on # top game (ex. [2,3] filters on 2nd and 3rd top games)
 *  */
export type TopGameFilter = {
  gameNums?: [number]
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

export type TournamentLinks = {
  facebook: string
  discord: string
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

export type TournamentVals = {
  id: string
  addrState: string
  admins: { roles: "administrator" | "owner", userVals: User }
  city: string
  countryCode: string
  createdAt: number
  currency: string
  endAt: number
  eventRegistrationClosedAt: number
  events: { limit: number, filter: EventFilter, eventVals: _Event }
  hasOfflineEvents: boolean
  hasOnlineEvents: boolean
  isOnline: boolean
  hashtag: string
  images: { type: "thumbnail" | "banner", imageVals: Image }
  isRegistrationOpen: boolean
  lat: number
  lng: number
  mapsPlaceId: string
  links: TournamentLinks
  name: string
  numAttendees: number
  owner: User
  participants: { query: ParticipantQuery, isAdmin: boolean, participantVals: Participant }
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
  stations: { page: number, perPage: number, stationsVals: Station }
  streamQueue: [StreamQueue]
  streams: [Streams]
  teamCreationClosesAt: number
  teams: { query: TeamQuery, teamVals: Team }
  timezone: string
  tournamentType: number // needs docs
  updatedAt: number
  url: { tab: string, relative: boolean }
  venueAddress: string
  venueName: string
  waves: [Wave]
}