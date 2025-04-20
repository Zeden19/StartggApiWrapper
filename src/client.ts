import {GraphQLClient} from "graphql-request";

let apiKey: string | null;

export function setApiKey(key: string | undefined) {
  if (!key) throw Error("Key is required")
  apiKey = key
}

export function getClient() {
  if (!apiKey) throw Error("Api Key has not been set; use setApiKey(key)")
  return new GraphQLClient("https://api.start.gg/gql/alpha", {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    }
  });
}