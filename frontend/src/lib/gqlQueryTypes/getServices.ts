/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getServices
// ====================================================

export interface getServices_getGenerals_listBody {
  __typename: "General_ListBody";
  image: string[] | null;
  text: string[] | null;
  title: string | null;
  key: string | null;
  input: string[] | null;
}

export interface getServices_getGenerals {
  __typename: "General";
  key: string | null;
  body: string | null;
  listBody: getServices_getGenerals_listBody[] | null;
}

export interface getServices {
  /**
   * Get all items of type General by id
   */
  getGenerals: getServices_getGenerals[];
}

export interface getServicesVariables {
  Ids: GraphQLObjectId[];
}
