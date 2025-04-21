import dotenv from "dotenv"
import {setApiKey} from "../client";
import {getTournament} from "./tournament";

dotenv.config();

setApiKey(process.env.apiKey);

const {query, data: {tournaments}} = await getTournament({
  sort: "startAt",
  filters: {name: "Don't Sleep On Me 3!", published: true, hasOnlineEvents: false},
  pageQuery: {perPage: 5, page: 1},
  
  returnVals: {
    nodes: {
      fields: ["id", "name", "venueAddress", "mapsPlaceId", "lat", "lng", "numAttendees"],
      images: {
        filter: {type: "profile"},
        return: ["type", "url", "height", "ratio", "width"]
      },
    }
  }
});
console.log(query);
console.log(tournaments?.nodes);