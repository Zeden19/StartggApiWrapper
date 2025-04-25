import {PageInfo, PageInfoVals} from "./pageInfo";
import EmptyObject from "../../utlities/EmptyObject";
import {Image} from "./image";
import {ActivityState} from "./activityState";
import {Tournament} from "./tournament";
import {Videogame} from "./videogame";
import {Wave} from "./wave";

export type EventFilter = {}

export type EventConnection = {
  events: {
    pageInfo: PageInfo,
    nodes: _Event[]
  }
}

export type EventConnectionVals = {
  pageInfo: PageInfoVals,
  nodes: Partial<EventVals>
}

/**rah*/
export type _Event = {
  id: string;
  checkInBuffer: number
  checkInDuration: number
  checkInEnabled: boolean
  competitionTier: number
  createdAt: number
  deckSubmissionDeadline: number
  /**@deprecated use {@link _Event.teamRosterSize} instead*/
  entrantSizeMax: number,
  /**@deprecated use {@link _Event.teamRosterSize} instead*/
  entrantSizeMin: number
  teamRosterSize: TeamRosterSize
  
  entrants: never[]
  
  hasDecks: boolean
  hasTasks: boolean
  images: Image[]
  isOnline: boolean
  
  league: never[]
  
  matchRulesMarkdown: string
  name: string
  numEntrants: number
  
  phaseGroup: never[]
  
  prizingInfo: JSON
  publishing: JSON
  rulesMarkdown: string
  rulesetId: number
  /**@deprecated Use ruleset instead */
  rulesetSettings: JSON
  
  sets: never[]
  
  slug: string
  
  standings: []
  
  startAt: number
  state: ActivityState
  
  stations: never[]
  
  teamManagementDeadline: number
  teamNameAllowed: boolean
  tournament: Tournament
  type: number
  updatedAt: number
  useEventSeeds: boolean
  
  userEntrants: never[]
  
  videogame: Videogame
  
  waves: Wave[]
}

export type EventVals = {}


type TeamRosterSize = {
  maxAlternates: number
  maxPlayers: number
  minAlternates: number
  minPlayers: number
}

type TeamRosterSizeVals = {
  maxAlternates: EmptyObject
  maxPlayers: EmptyObject
  minAlternates: EmptyObject
  minPlayers: EmptyObject
}


