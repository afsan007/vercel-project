import gql from 'graphql-tag';

export const GET_SERVICES = gql`
    query getServices($Ids:[ObjectId!]!){
           getGenerals(ids: $Ids){
             key, 
             body, 
             listBody{
               image,
               text,
               title,
               key,
               input
             }
           }
         }
`;