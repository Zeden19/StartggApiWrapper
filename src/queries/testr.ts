import dotenv from "dotenv"
import {setApiKey} from "../client";
import {getTournament} from "./tournament";

dotenv.config();

setApiKey(process.env.apiKey);

const {query, data: {tournaments}} = await getTournament({
  sort: "eventRegistrationClosesAt",
  filters: {name: "EVO", published: true,},
  pageQuery: {perPage: 5, page: 1},
  returnVals:
    {
      pageInfo: {totalPages: true, sortBy: true, total: true},
      nodes: {id: true, name: true, venueAddress: true, images: {type: "profile", imageVals: {type: true}}}
    }
})
console.log(query)
console.log(tournaments?.nodes)