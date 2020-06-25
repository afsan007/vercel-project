import gql from 'graphql-tag';

export const GET_SERVICESIDS = gql`
  query getServicesIds($parentId: ObjectId!, $offset: Int!, $limit: Int!) {
    search(query: { match: { parentId: $parentId } }, offset: $offset, limit: $limit){
        items{
          title
          _id          
          }
        }
  }
`;