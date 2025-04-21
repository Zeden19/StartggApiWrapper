export type PageInfo = {
  total: number
  totalPages: number
  page: number
  perPage: number
  sortBy: string
  filter: JSON
}

type PageInfoFields = "total" | "totalPages" | "page" | "perPage" | "sortBy" | "filter"
export type PageInfoVals = readonly PageInfoFields[]