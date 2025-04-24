import emptyObject from "../../utlities/EmptyObject";

export type Image = {
  id: string
  height: number
  ratio: number
  type: string
  url: string
  width: number
}


type ImageVals = {
  id?: emptyObject,
  height?: emptyObject,
  ratio?: emptyObject,
  type?: emptyObject,
  url?: emptyObject,
  width?: emptyObject
}

export type ImageNode = {
  returnVals?: ImageVals,
  type?: "profile" | "banner"
}
