import {User, UserVals} from "./user";
import {Wave, WaveVals} from "./wave";
import {_Event, EventFilter, EventVals} from "./event";
import {ParticipantConnection, ParticipantQuery, ParticipantVals} from "./participant";
import {Image, ImageNode} from "./image";
import {StationsConnection, StationVals} from "./stations";
import {StreamQueue, Stream} from "./stream";
import {TeamConnection, TeamQuery, TeamVals} from "./team";
import {PageInfo, PageInfoVals} from "./pageInfo";
import {Streams} from "./streams";
import emptyObject from "../../utlities/EmptyObject";

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

export type TournamentLinks = "facebook" | "discord"

export type TournamentSort = "startAt" | "endAt" | "eventRegistrationClosesAt" | "computedUpdatedAt"

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
    nodes: Tournament[]
  }
}

export type TournamentConnectionVals = {
  pageInfo: PageInfoVals
  nodes: Partial<TournamentVals>
}


export type TournamentVals = {
  /** Scalar fields you want to return */
  id?: emptyObject;
  addrState?: emptyObject;
  city?: emptyObject;
  countryCode?: emptyObject;
  createdAt?: emptyObject;
  currency?: emptyObject;
  endAt?: emptyObject;
  eventRegistrationClosedAt?: emptyObject;
  hasOfflineEvents?: emptyObject;
  hasOnlineEvents?: emptyObject;
  isOnline?: emptyObject;
  hashtag?: emptyObject;
  isRegistrationOpen?: emptyObject;
  lat?: emptyObject;
  lng?: emptyObject;
  mapsPlaceId?: emptyObject;
  name?: emptyObject;
  numAttendees?: emptyObject;
  postalCode?: emptyObject;
  primaryContact?: emptyObject;
  primaryContactType?: emptyObject;
  registrationClosesAt?: emptyObject;
  rules?: emptyObject;
  shortSlug?: emptyObject;
  slug?: emptyObject;
  startAt?: emptyObject;
  state?: emptyObject;
  teamCreationClosesAt?: emptyObject;
  timezone?: emptyObject;
  tournamentType?: emptyObject;
  updatedAt?: emptyObject;
  venueAddress?: emptyObject;
  venueName?: emptyObject;
  
  /** Nested: admins */
  admins?: {
    roles:("administrator" | "owner") [];
    returnVals: UserVals;
  };
  
  /** Nested: events */
  events?: {
    filter: EventFilter & { limit?: number };
    returnVals: EventVals;
  };
  
  /** Nested: images; might need to change depending on images on different things (ex. user) */
  images?: ImageNode;
  
  /** Nested: links */
  links?: readonly TournamentLinks[];
  
  /** Nested: owner */
  owner?: UserVals;
  
  /** Nested: participants */
  participants?: {
    filter: ParticipantQuery & { isAdmin?: boolean };
    returnVals?: ParticipantVals;
  };
  
  /** Nested: stations */
  stations?: {
    pagination?: { page: boolean; perPage: boolean };
    returnVals: StationVals;
  };
  
  /** Nested: streamQueue */
  streamQueue?: readonly StreamQueue[];
  
  /** Nested: streams */
  streams?: readonly Stream[];
  
  /** Nested: teams */
  teams?: {
    filter: TeamQuery;
    returnVals: TeamVals;
  };
  
  /** Nested: url */
  url?: {
    filter?: { tab?: string };
    returnVals: readonly ["relative"];
  };
  
  /** Nested: waves */
  waves?: WaveVals;
  
  /** Misc: publishing */
  publishing?: JSON;
};

export type Tournament = {
  id: string
  addrState: string
  admins: User[]
  city: string
  countryCode: string
  createdAt: number
  currency: string
  endAt: number
  eventRegistrationClosedAt: number
  events: _Event[]
  hasOfflineEvents: boolean
  hasOnlineEvents: boolean
  isOnline: boolean
  hashtag: string
  images: Image[]
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
  streamQueue: StreamQueue[]
  streams: Streams[]
  teamCreationClosesAt: number
  teams: TeamConnection
  timezone: string
  tournamentType: number // needs docs
  updatedAt: number
  url: { tab: string, relative: boolean }
  venueAddress: string
  venueName: string
  waves: Wave[]
}