import React, { useState } from "react";
import {
  getSearchResult,
  getSearchResultVariables,
} from "$gqlQueryTypes/getSearchResult";
import { useQuery } from "@apollo/react-hooks";
import { GET_SEARCH_RESULT } from "$queries";
import { SearchToolbar } from "bp-components";
import Link from "next/link";
import styled from "styled-components";

const Mylink = styled.a`
  :active {
    color: black;
  }
  :visited {
    color: black;
  }
  :hover{
    color: green
  }
`

const renderLink = (children: JSX.Element, schema, id) => {
  let href = "/webinar/[webId]" ;
  if (schema == "Presenter") href = "/presenter/[presenterId]";
  return (
    <Link href={href} as={`/${schema}/${id}`}>
      <Mylink>{children}</Mylink>
    </Link>
  );
};

const FetchSearchResult = (inputvalue) => {
  let { data, loading, error } = useQuery<
    getSearchResult,
    getSearchResultVariables
  >(GET_SEARCH_RESULT, {
    variables: {
      Input: inputvalue,
    },
    skip: inputvalue.length < 2,
  });
  let searchData = data?.search.items.map((item) => {
    let title = item.title;
    let id = item._id;
    let schema = item.schema.name;
    return { title, id, schema };
  });
  if (!searchData) searchData = [];
  return { searchData, loading, error };
};


export const Search = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const data = FetchSearchResult(inputValue);
  const options = data.searchData;
  const loading = data.loading;

  // const onChangeSearch = (event, value, reason) => {  
  //   console.log(event);
  //   if (reason === "select-option")
  //   {
  //     location.href = `/${value.schema}/${value.id}`;
  //   }
  // };
  

  return (
    <SearchToolbar
      searchResult = {options}
      open = {open}
      inputValue = {inputValue}
      setInputValue = {setInputValue}
      setOpen = {setOpen}
      loading = {loading}
      renderLink = {renderLink}
    />
  );
};

export default Search;
