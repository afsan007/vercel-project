import gql from "graphql-tag";

export const GET_PRESENTER = gql`
  query getPresenters($PresenterIds: [ObjectId!]!) {
    getPresenters(ids: $PresenterIds) {
      _id
      title
      fieldOfStudy
      affiliation
      profileImage
      biography
    }
  }
`;
