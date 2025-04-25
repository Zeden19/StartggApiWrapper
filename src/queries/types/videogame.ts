import {Image, ImageNode} from "./image";
import {Character, CharacterVals} from "./character";
import {Stage, StageVals} from "./stage";

export type Videogame = {
  id: number
  characters: Character[]
  displayName: string
  images: Image[]
  name: string
  slug: string
  stages: Stage[]
}

export type VideogameVals = {
  id?: string
  characters?: CharacterVals
  displayName?: string
  images?: ImageNode
  name?: string
  slug?: string
  stages?: StageVals
}