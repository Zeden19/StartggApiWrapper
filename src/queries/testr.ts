import dotenv from "dotenv"
import {setApiKey} from "../client";
import {getTournament} from "./tournament";

dotenv.config();

setApiKey(process.env.apiKey);

const {query, data: {tournaments}} = await getTournament({
  sort: "startAt",
  filters: {name: "Don't Sleep On me"},
  page: {perPage: 5, page: 1},
  returnVals: {
    pageInfo: {page: {}, totalPages: {}},
    nodes: {
      id: {}, name: {}, lat: {}, lng: {}, mapsPlaceId: {},
      images: {
        type: "banner",
        returnVals: {type: {}, width: {}}
      },
      admins: {
        roles: ["owner"],
        returnVals: {
          name: {}, id: {},
          location: {id: {}, city: {}},
          authorizations: {types: ["DISCORD"], returnVals: {type: {}, id: {}}},
          images: {type: "banner", returnVals: {type: {}, width: {}}}
        },
      }
    }
  }
});

console.log(query);
console.log(tournaments);