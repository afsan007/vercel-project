import React, { FC } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { CircularProgress, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import styled from "styled-components";

const TextSearch = styled(TextField)`
  width: 313px;
  font-family: "IRANSans";
  @media (max-width: 767px) {
    width: 190px;
  }
`;

const ResultGrid = styled(Grid)`
  font-family: "IRANSans";
  font-size: 15px;
  color: black;
`;

const GroupGrid = styled(Grid)`
  font-family: "IRANSans";
  margin: 0px 10px 5px 0px;
  font-size: 13px;
  color: gray;
`;
const AutoSearch = styled.div`
  & .MuiAutocomplete-inputRoot {
    font-family: "IRANSans";
  }
`;

export interface searchResult {
  title: string;
  id: string;
  schema: string;
}

export interface searchProps {
  open: boolean;
  inputValue: string;
  setInputValue: (string) => any;
  searchResult: searchResult[];
  loading: boolean;
  setOpen: (boolean) => any;
  renderLink: (
    children: JSX.Element,
    schema: string,
    id: string
  ) => JSX.Element;
}

export const SearchToolbar: FC<searchProps> = ({
  open,
  inputValue,
  setInputValue,
  searchResult,
  loading,
  setOpen,
  renderLink,
}) => {
  const options = searchResult;

  return (
    <AutoSearch>
      <Autocomplete
        freeSolo
        id="asynchronous-demo"
        style={{ width: 313, height: 40 }}
        open={open}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        onOpen={() => {
          setOpen(options.length > 0);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionSelected={(option, value) => option.title === value.title}
        getOptionLabel={(option) => option.title}
        options={options}
        groupBy={(option) => {
          let group = "وبینار: ";
          if (option.schema == "Presenter") group = "ارایه دهنده‌: ";
          return group;
        }}
        loading={loading}
        renderInput={(params) => (
          <TextSearch
            {...params}
            autoComplete="on"
            variant="outlined"
            placeholder="جستجو"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                </>
              ),
            }}
          />
        )}
        renderOption={(option, state) => {
          return (
            <ResultGrid>
              {renderLink(<div>{option.title}</div>, option.schema, option.id)}
            </ResultGrid>
          );
        }}
        renderGroup={(params) => (
          <GroupGrid>
            {params.group} {params.children}
          </GroupGrid>
        )}
      />
    </AutoSearch>
  );
};
