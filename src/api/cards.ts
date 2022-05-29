const API_URL = "/graphql";

export const getCard = (slug: string) => {
  const query = `query($slug:String!) {
    card(slug: $slug) {
      name
      rarity
      canBuy
    }
  }`;

  return fetch(API_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ query, variables: { slug } }),
  });
};
