import React, { useState } from "react";
import { SearchToolbar, searchResult } from "./SearchToolbar";

export default {
  title: "ATOMS | SearchComponent / SearchComponent",
  component: SearchToolbar,
};

const searchResults: searchResult[] = [
  {
    title: "how to",
    id: "1234",
    schema: "webinar",
  },
];

const renderLink = (children: JSX.Element, schema, id) => {
  return (
    <a href="#">
      {children}
    </a>
  );
};

export const SearchComponent = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return (
    <SearchToolbar
      searchResult={searchResults}
      open={open}
      inputValue={inputValue}
      setInputValue={setInputValue}
      setOpen={setOpen}
      loading={false}
      renderLink = {renderLink}
    />
  );
};
