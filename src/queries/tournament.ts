import {getClient} from "../client";
import {TournamentConnection, TournamentConnectionVals, TournamentFilter, TournamentSort} from "./types/tournament";
import {PageInfoVals, PageQuery} from "./types/pageInfo";
import {isEmptyObject} from "../utlities/EmptyObject";

function returnString(value: string): string {
  return value.toUpperCase() === value ? value : `"${value}"`;
}

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
  return Object.entries(object).map(([key, value]) => {
    if (isEmptyObject(value)) return `${key}`;
    
    // if both returnVals not exist, then everything will be an emptyObject
    else if (!value.returnVals) {
      return `${key} {${Object.keys(value).join(" ")}}\n`;
      
    } else {
      const filters = Object.entries(value).filter(([key]) => key !== "returnVals").map(([key, value]) => {
        if (Array.isArray(value)) {
          return `${key}: [${value.map((val) => `${returnString(val)}`).join(", ")}]`
        } else return `${key}: ${returnString(<string>value)}`;
      }).join(", ");
      
      const returnVals = parseNode(value.returnVals);
      
      return `${key}(${filters}) {${returnVals}}\n`;
    }
  }).join(" ");
}

function parsePageInfo(pageInfo: PageInfoVals): string {
  return Object.keys(pageInfo).join(" ")
}

export async function getTournament({page, filters, sort, returnVals}: {
  page?: Partial<PageQuery>,
  filters?: Partial<TournamentFilter>,
  returnVals?: Partial<TournamentConnectionVals>,
  sort?: TournamentSort
}): Promise<{ query: string, data: Partial<TournamentConnection> }> {
  
  const client = getClient();
  
  const tournamentParams = `query: {
   ${page !== undefined ? `${parseQuery(page)}, ` : ''}
   ${filters !== undefined ? `filter: {${parseQuery(filters)}}, ` : ''}
   ${sort !== undefined ? `sort: ${sort}` : ''}}`
  
  const returnParams = `${returnVals?.pageInfo !== undefined ? `pageInfo {${parsePageInfo(returnVals.pageInfo)}}` : ''}
                    ${returnVals?.nodes !== undefined ? `nodes {${parseNode(returnVals.nodes)}}` : ''}`
  
  const queryString = `query TournamentQuery {
    tournaments(${tournamentParams})
    {${returnParams}}}`
  
  return {data: await client.request(queryString), query: queryString}
}

