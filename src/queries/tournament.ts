import {getClient} from "../client";
import {TournamentConnection, TournamentConnectionVals, TournamentFilter, TournamentPage, TournamentSort} from "./types/tournament";

const parseQuery = (object: object) => {
  return Object.entries(object)
    .map(([key, value]) => {
      const formattedValue = typeof value === "string" ? `"${value}"` : value;
      return `${key}: ${formattedValue}`;
    }).join(", ");
};

const parseNode = (object: object) => {
  return Object.keys(object).join(" ");
}

export async function getTournament({pageQuery, filters, sort, returnVals}: {
  pageQuery?: Partial<TournamentPage>,
  filters?: Partial<TournamentFilter>,
  returnVals?: Partial<TournamentConnectionVals>,
  sort?: TournamentSort
}): Promise<{ query: string, data: Partial<TournamentConnection> }> {
  
  const client = getClient();
  
  const tournamentParams = `query: {
   ${pageQuery !== undefined ? parseQuery(pageQuery) + ', ' : ''}
   ${filters !== undefined ? `filter: {${parseQuery(filters)}}, ` : ''}
   ${sort !== undefined ? `sort: ${sort}` : ''}}`
  
  const toReturn = `${returnVals?.pageInfo !== undefined ? `pageInfo {${parseNode(returnVals.pageInfo)}}` : ''}
                    ${returnVals?.nodes !== undefined ? `nodes {${parseNode(returnVals.nodes)}}` : ''}`
  
  const queryString = `query TournamentQuery {
    tournaments(${tournamentParams})
    {${toReturn}}}`
  
  return {data: await client.request(queryString), query: queryString}
}

