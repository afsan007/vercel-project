/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getWebinarIds
// ====================================================

export interface getWebinarIds_search_items {
  __typename: "Collection" | "Webinar" | "Presenter" | "General" | "RootCollection" | "_BaseItem";
  _id: GraphQLObjectId;
  title: string;
}

export interface getWebinarIds_search {
  __typename: "SearchResults";
  items: getWebinarIds_search_items[];
  total: number;
}

export interface getWebinarIds {
  search: getWebinarIds_search;
}

export interface getWebinarIdsVariables {
  parentId: GraphQLObjectId;
  offset: number;
  limit: number;
}
