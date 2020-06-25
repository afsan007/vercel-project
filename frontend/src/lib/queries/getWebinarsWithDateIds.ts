import gql from 'graphql-tag';

export const GET_WEBINARSIDSWITHDATE = gql`
query getWebinarsIdsWithDate($query:JSON!){
    search(query:$query,limit:40,offset:0){
      items{
          title
          _id
        }
      }
    }
`;