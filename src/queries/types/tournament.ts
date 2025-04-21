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
  pageInfo: PageInfoVals
  nodes: Partial<TournamentVals>
}

type TournamentFields =
  | "id"
  | "addrState"
  | "city"
  | "countryCode"
  | "createdAt"
  | "currency"
  | "endAt"
  | "eventRegistrationClosedAt"
  | "hasOfflineEvents"
  | "hasOnlineEvents"
  | "isOnline"
  | "hashtag"
  | "isRegistrationOpen"
  | "lat"
  | "lng"
  | "mapsPlaceId"
  | "name"
  | "numAttendees"
  | "postalCode"
  | "primaryContact"
  | "primaryContactType"
  | "registrationClosesAt"
  | "rules"
  | "shortSlug"
  | "slug"
  | "startAt"
  | "state"
  | "teamCreationClosesAt"
  | "timezone"
  | "tournamentType"
  | "updatedAt"
  | "venueAddress"
  | "venueName";

export type TournamentVals = {
  /** Scalar fields you want to return */
  fields?: readonly TournamentFields[];
  
  /** Nested: admins */
  admins?: {
    filter: { roles: "administrator" | "owner" };
    return: UserVals;
  };
  
  /** Nested: events */
  events?: {
    filter: EventFilter & { limit?: number };
    return: EventVals;
  };
  
  /** Nested: images */
  images?: {
    filter: { type: "profile" | "banner" };
    return: readonly (keyof ImageVals)[];
  };
  
  /** Nested: links */
  links?: TournamentLinks;
  
  /** Nested: owner */
  owner?: UserVals;
  
  /** Nested: participants */
  participants?: {
    filter: ParticipantQuery & { isAdmin?: boolean };
    return: ParticipantVals;
  };
  
  /** Nested: stations */
  stations?: {
    pagination?: { page: boolean; perPage: boolean };
    return: StationVals;
  };
  
  /** Nested: streamQueue */
  streamQueue?: readonly StreamQueue[];
  
  /** Nested: streams */
  streams?: readonly Streams[];
  
  /** Nested: teams */
  teams?: {
    filter: TeamQuery;
    return: TeamVals;
  };
  
  /** Nested: url */
  url?: {
    filter?: { tab?: string };
    return: readonly ["relative"];
  };
  
  /** Nested: waves */
  waves?: WaveVals;
  
  /** Misc: publishing */
  publishing?: JSON;
};


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