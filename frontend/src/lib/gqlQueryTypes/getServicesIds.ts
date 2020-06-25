/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getServicesIds
// ====================================================

export interface getServicesIds_search_items {
  __typename: "Collection" | "Webinar" | "Presenter" | "General" | "RootCollection" | "Test" | "_BaseItem";
  title: string;
  _id: GraphQLObjectId;
}

export interface getServicesIds_search {
  __typename: "SearchResults";
  items: getServicesIds_search_items[];
}

export interface getServicesIds {
  search: getServicesIds_search;
}

export interface getServicesIdsVariables {
  parentId: GraphQLObjectId;
  offset: number;
  limit: number;
}
