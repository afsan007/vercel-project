import gql from "graphql-tag";

export const GET_Specific_WebinarIds = gql`
  query getSpecificWebinarIds($query: JSON!, $limit: Int!, $offset: Int!) {
    search(query: $query, limit: $limit, offset: $offset) {
      total
      items {
        _id
      }
    }
  }
`;
