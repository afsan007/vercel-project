import gql from 'graphql-tag';

export const GET_WEBINARIDS = gql`
  query getWebinarIds($parentId: ObjectId!, $offset: Int!, $limit: Int!) {
    search(query: { match: { parentId: $parentId } }, offset: $offset, limit: $limit) {
      items {
        _id
        title        
      }
      total
    }
  }
`;