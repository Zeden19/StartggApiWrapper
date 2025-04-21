import dotenv from "dotenv"
import {setApiKey} from "../client";
import {getTournament} from "./tournament";

dotenv.config();

setApiKey(process.env.apiKey);

const {query, data: {tournaments}} = await getTournament({
  sort: "eventRegistrationClosesAt",
  filters: {name: "Don't Sleep On Me", published: true,},
  pageQuery: {perPage: 5, page: 1},
  
  returnVals: {
    pageInfo: ["totalPages", "sortBy", "total", "page", "filter"],
    nodes: {
      fields: ["id", "name", "venueAddress", "mapsPlaceId", "lat", "lng"],
      images: {
        filter: {type: "profile"},
        return: ["type", "url", "height", "ratio", "width"]
      },
      owner: {
        return: ["id", "name"],
      },
      admins: {
        filter: {roles: "owner"},
        return: ["name"]
      }
    }
  }
})
console.log(query)
console.log(tournaments?.nodes)