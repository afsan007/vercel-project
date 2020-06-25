/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getWebinarsIdsWithDate
// ====================================================

export interface getWebinarsIdsWithDate_search_items {
  __typename: "Collection" | "Webinar" | "Presenter" | "General" | "RootCollection" | "Test" | "_BaseItem";
  title: string;
  _id: GraphQLObjectId;
}

export interface getWebinarsIdsWithDate_search {
  __typename: "SearchResults";
  items: getWebinarsIdsWithDate_search_items[];
}

export interface getWebinarsIdsWithDate {
  search: getWebinarsIdsWithDate_search;
}

export interface getWebinarsIdsWithDateVariables {
  query: GraphQLJSON;
}
