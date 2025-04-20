export type PageInfo = {
  total: number
  totalPages: number
  page: number
  perPage: number
  sortBy: string
  filter: JSON
  
}

export type PageInfoVals = {
  total: boolean
  totalPages: boolean
  page: boolean
  perPage: boolean
  sortBy: boolean
  filter: boolean
}