import emptyObject from "../../utlities/EmptyObject";

export type PageInfo = {
  total?: number
  totalPages?: number
  page?: number
  perPage?: number
  sortBy?: string
  filter?: JSON
}

export type PageInfoVals = {
  total?: emptyObject,
  totalPages?: emptyObject,
  page?: emptyObject,
  perPage?: emptyObject,
  sortBy?: emptyObject,
  filter?: emptyObject
}

export type PageQuery = {
  page?: number
  perPage?: number
  sortBy?: string
}