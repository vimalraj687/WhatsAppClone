import React from "react";
// import { useContext } from "react";
// import { AccountContext } from "../../../context/AccountProvider";
import { Box } from "@mui/material";
import Search from "./Search";
import Header from "./Header";
const Menu = () => {
  //   const { account } = useContext(AccountContext);
  return (
    <>
      <Box>
        <Header />
        <Search />
      </Box>
    </>
  );
};

export default Menu;
