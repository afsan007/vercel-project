import gql from "graphql-tag";

export const GET_SEARCH_RESULT = gql`
  query getSearchResult($Input: String) {
    search(
      query: {
        bool: {
          must: [
            { match: { title: $Input } }
            {
              bool: {
                should: [
                  { match: { schema: "Webinar" } }
                  { match: { schema: "Presenter" } }
                ]
              }
            }
          ]
          filter: []
        }
      }
      limit: 40
      offset: 0
    ) {
      items {
        title
        _id
        schema {
          name
        }
      }
    }
  }
`;
