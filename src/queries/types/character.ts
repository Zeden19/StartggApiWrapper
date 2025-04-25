import {Image, ImageNode} from "./image";
import emptyObject from "../../utlities/EmptyObject";

export type Character = {
  id?: string
  images?: Image[]
  name?: string
}

export type CharacterVals = {
  id?: emptyObject
  images?: ImageNode
  name?: emptyObject
}