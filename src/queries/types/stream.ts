import emptyObject from "../../utlities/EmptyObject";

type StreamType = "TWITCH" | "MIXER" | "YOUTUBE"

export type Stream = {
  id?: string,
  isOnline?: boolean,
  name?: string,
  type?: StreamType
}

export type StreamVals = {
  id?: emptyObject
  isOnline?: emptyObject
  name?: emptyObject
  type?: emptyObject
}

export type StreamQueue = {}

