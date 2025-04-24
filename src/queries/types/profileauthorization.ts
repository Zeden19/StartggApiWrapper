import {Stream, StreamVals} from "./stream";
import emptyObject from "../../utlities/EmptyObject";

export type ProfileAuthorization = {
  id?: string,
  externalId?: string,
  externalUsername?: string,
  stream?: Stream,
  type?: AuthorizationType,
  url?: string
}

export type ProfileAuthorizationVals = {
  id?: emptyObject
  externalId?: emptyObject,
  externalUsername?: emptyObject
  type?: emptyObject
  url?: emptyObject
  stream?: StreamVals
}

type AuthorizationType =
  "TWITTER" |
  "TWITCH" |
  "STEAM" |
  "DISCORD" |
  "XBOX" |
  "EPIC" |
  "BATTLENET" |
  "MIXER"