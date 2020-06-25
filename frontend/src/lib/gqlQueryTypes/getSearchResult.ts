/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getSearchResult
// ====================================================

export interface getSearchResult_search_items_schema {
  __typename: "Schema";
  name: string;
}

export interface getSearchResult_search_items {
  __typename: "Collection" | "Webinar" | "Presenter" | "General" | "RootCollection" | "Test" | "_BaseItem";
  title: string;
  _id: GraphQLObjectId;
  schema: getSearchResult_search_items_schema;
}

export interface getSearchResult_search {
  __typename: "SearchResults";
  items: getSearchResult_search_items[];
}

export interface getSearchResult {
  search: getSearchResult_search;
}

export interface getSearchResultVariables {
  Input?: string | null;
}
