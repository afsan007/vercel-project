/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPresenterIds
// ====================================================

export interface getPresenterIds_search_items {
  __typename: "Collection" | "Webinar" | "Presenter" | "General" | "RootCollection" | "Test" | "_BaseItem";
  title: string;
  _id: GraphQLObjectId;
}

export interface getPresenterIds_search {
  __typename: "SearchResults";
  items: getPresenterIds_search_items[];
  total: number;
}

export interface getPresenterIds {
  search: getPresenterIds_search;
}

export interface getPresenterIdsVariables {
  parentId: GraphQLObjectId;
  offset: number;
  limit: number;
}
