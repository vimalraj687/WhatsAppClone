import React from "react";
import { Search as SearchIcon } from "@mui/icons-material";
import { InputBase, Box } from "@mui/material";
import styled from "@emotion/styled";
const Component = styled(Box)`
  background: #ffffff;
  height: 45px;
  border-bottom: 1px solid #f2f2f2;
`;
const Wrapper = styled(Box)`
  background: #ededed;
  border-radius: 50px;
  margin: 4px;
`;
const Inputfield = styled(InputBase)`
  width: 100%;
  padding-left: 40px;
  padding-top: 6px;
`;
const Icon = styled(Box)`
  position: absolute;
  padding: 8px;
  color: #919191;
`;
const Search = () => {
  return (
    <Component>
      <Wrapper>
        <Icon>
          <SearchIcon />
        </Icon>
        <Inputfield placeholder="Search for start a new chat" />
      </Wrapper>
    </Component>
  );
};

export default Search;
