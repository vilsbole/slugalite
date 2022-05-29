import { gqlRequest } from "./utils";

export const getCard = (slug: string) => {
  const query = `query($slug: String!) {
    card(slug: $slug) {
      name
      rarity
      canBuy
    }
  }`;

  return gqlRequest({ query, variables: { slug } });
};

export const getCards = (slugs: string[]) => {
  const query = `query($slugs: [String!]) {
    cards(slugs: $slugs) {
      age
      name
      rarity
      team
      player {
        age
        country {
          code
          slug
        }
      }
      pictureUrl
      position
    }
  }`;

  return gqlRequest({ query, variables: { slugs } });
};
