import { gql } from 'apollo-boost';

export const SEARCH_ARTISTS = gql`
  query($searchTerm: String!) {
    search {
      artists(query: $searchTerm) {
        nodes {
          id
          name
          country
          disambiguation
          mediaWikiImages {
            url
            canonicalTitle
          }
        }
      }
    }
  }
`;