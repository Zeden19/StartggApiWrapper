import {ProfileAuthorization, ProfileAuthorizationVals} from "./profileauthorization";
import {Image, ImageNode} from "./image";
import emptyObject from "../../utlities/EmptyObject";

type SocialConnection = "TWITTER" | "TWITCH" | "DISCORD" | "MIXER" | "XBOX"

export type UserVals = {
  id?: emptyObject
  bio?: emptyObject
  birthday?: emptyObject
  discriminator?: emptyObject
  email?: emptyObject
  genderPronoun?: emptyObject
  name?: emptyObject
  slug?: emptyObject
  
  authorizations?: { types: readonly SocialConnection[], returnVals: ProfileAuthorizationVals }
  images?: ImageNode
  location?: AddressVals
}

export type User = {
  authorizations?: ProfileAuthorization,
  id?: string,
  bio?: string,
  birthday?: string,
  discriminator?: string,
  email?: string,
  // events: fixme
  genderPronoun?: string
  images?: Image[]
  // leagues: fixme
  location?: Address
  name?: string
  // player: fixme
  slug?: string
  // tournaments: fixme
}

type Address = {
  id?: string,
  city?: string
  country?: string
  countryId?: number
  state?: string
  stateId?: number
}

type AddressVals = {
  id?: emptyObject,
  city?: emptyObject
  country?: emptyObject
  countryId?: emptyObject
  state?: emptyObject
  stateId?: emptyObject
}