import React from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { useContext } from "react";
import { Box } from "@mui/material";
import HeaderMenu from "./HeaderMenu";
import { Chat as ChatIcon, DataSaverOff, Groups } from "@mui/icons-material";
import styled from "@emotion/styled";
const Component2 = styled(Box)`
  height: 41px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
});

const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 2px;
    padding: 8px;
    color: #666262;
  }
  & :first-child {
    font-size: 22px;
    margin-right: 8px;
    margin-top: 3px;
  }
`;
const Header = () => {
  const { account } = useContext(AccountContext);
  return (
    <>
      <Component2>
        <Image src={account.picture} alt="dp" />
        <Wrapper>
          <Groups />
          <DataSaverOff />
          <ChatIcon />
          <HeaderMenu />
        </Wrapper>
      </Component2>
    </>
  );
};

export default Header;
