/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getSpecificWebinarIds
// ====================================================

export interface getSpecificWebinarIds_search_items {
  __typename: "Collection" | "Webinar" | "Presenter" | "General" | "RootCollection" | "Test" | "_BaseItem";
  _id: GraphQLObjectId;
}

export interface getSpecificWebinarIds_search {
  __typename: "SearchResults";
  total: number;
  items: getSpecificWebinarIds_search_items[];
}

export interface getSpecificWebinarIds {
  search: getSpecificWebinarIds_search;
}

export interface getSpecificWebinarIdsVariables {
  query: GraphQLJSON;
  limit: number;
  offset: number;
}
