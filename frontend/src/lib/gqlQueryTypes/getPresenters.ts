/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPresenters
// ====================================================

export interface getPresenters_getPresenters {
  __typename: "Presenter";
  _id: GraphQLObjectId;
  title: string;
  fieldOfStudy: string | null;
  affiliation: string | null;
  profileImage: string | null;
  biography: string | null;
}

export interface getPresenters {
  /**
   * Get all items of type Presenter by id
   */
  getPresenters: getPresenters_getPresenters[];
}

export interface getPresentersVariables {
  PresenterIds: GraphQLObjectId[];
}
