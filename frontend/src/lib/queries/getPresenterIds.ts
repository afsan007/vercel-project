import gql from "graphql-tag";

export const GET_PRESENTERIDS = gql`
  query getPresenterIds($parentId: ObjectId!, $offset: Int!, $limit: Int!) {
    search(
      query: { match: { parentId: $parentId } }
      limit: $limit
      offset: $offset
    ) {
      items {
        title
        _id
      }
      total
    }
  }
`;
