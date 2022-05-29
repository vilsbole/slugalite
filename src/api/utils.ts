const API_URL = "/graphql";

interface GQLRequest {
  query: string;
  variables: Record<string, unknown>;
}

const gqlRequestOptions = ({ query, variables }: GQLRequest) => ({
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({ query, variables }),
});

export const gqlRequest = ({ query, variables }: GQLRequest) =>
  fetch(API_URL, gqlRequestOptions({ query, variables }))
    .then((res) => res.json())
    .then(({ data }) => data.cards);
