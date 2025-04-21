import {getClient} from "../client";
import {TournamentConnection, TournamentConnectionVals, TournamentFilter, TournamentPage, TournamentSort} from "./types/tournament";
import {PageInfoVals} from "./types/pageInfo";

function parseQuery(object: object): string {
  return Object.entries(object)
    .map(([key, value]) => {
      if (typeof value === "string") return `${key}: "${value}"`;
      else if (typeof value === "object") {
        const nestedQuery = parseQuery(value);
        return `${key}: {${nestedQuery}}`;
      } else return `${key}: ${value}`;
    }).join(", ");
}

function parseNode(object: object): string {
  if (Array.isArray(object)) {return object.join(" ")}
  return Object.entries(object).map(([key, value]) => {
    if (Array.isArray(value)) {
      return value.join(" ");
    }
    if (typeof value === "object" && value !== null) {
      const args = value.filter ? `(${Object.entries(value.filter).map(([k, v]) => `${k}: ${typeof v === "string" ? `"${v}"` : v}`).join(", ")})` : '';
      const nestedNode = Object.entries(value)
        .filter(([k, v]) => typeof v === "object" && k !== "filter")
        .map(([_, v]) => parseNode(<object>v))
        .join(" ");
      return `${key}${args} {${nestedNode}}`;
    } else {
      return `${key}`;
    }
  }).join(" ");
}

function parsePageInfo(pageInfo: PageInfoVals): string {
  return pageInfo.join(" ");
}

export async function getTournament({pageQuery, filters, sort, returnVals}: {
  pageQuery?: Partial<TournamentPage>,
  filters?: Partial<TournamentFilter>,
  returnVals?: Partial<TournamentConnectionVals>,
  sort?: TournamentSort
}): Promise<{ query: string, data: Partial<TournamentConnection> }> {
  
  const client = getClient();
  
  const tournamentParams = `query: {
   ${pageQuery !== undefined ? `${parseQuery(pageQuery)}, ` : ''}
   ${filters !== undefined ? `filter: {${parseQuery(filters)}}, ` : ''}
   ${sort !== undefined ? `sort: ${sort}` : ''}}`
  
  const returnParams = `${returnVals?.pageInfo !== undefined ? `pageInfo {${parsePageInfo(returnVals.pageInfo)}}` : ''}
                    ${returnVals?.nodes !== undefined ? `nodes {${parseNode(returnVals.nodes)}}` : ''}`
  
  const queryString = `query TournamentQuery {
    tournaments(${tournamentParams})
    {${returnParams}}}`
  
  return {data: await client.request(queryString), query: queryString}
}

