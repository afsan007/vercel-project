import gql from "graphql-tag";

export const GET_WEBINARS = gql`
  query getWebinars($Ids: [ObjectId!]!) {
    getWebinars(ids: $Ids) {
      title
      _id
      keywords
      thumbnail
      presentDate
      presentEndDate
      description
      coverImageAddress
      webinarLink
      Attachment {
        URL
        Title
        Kind
        Duration
        Thumbnail
        format
        Iframe {
          Source
          Width
          Height
        }
      }
      presenterId {
        _id
        title
        profileImage
        affiliation
      }
    }
  }
`;
