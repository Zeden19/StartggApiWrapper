import {gql} from "graphql-request";
import {getClient} from "../client";
import {Tournament, TournamentFilter, TournamentVals} from "./types/tournament";

const client = getClient();

export function getTournament(filter: Partial<TournamentFilter>, returnVals: Partial<TournamentVals>):
  Partial<Tournament> {
  return {};
}
