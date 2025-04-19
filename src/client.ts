import {GraphQLClient} from "graphql-request";

let apiKey: string | null;

export function setApiKey(key: string) {
  apiKey = key
}

export function getClient() {
  if (!apiKey) return Error("Api Key has not been set; use setApiKey(key)")
  return new GraphQLClient("https://api.start.gg/gql/alpha", {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    }
  });
}