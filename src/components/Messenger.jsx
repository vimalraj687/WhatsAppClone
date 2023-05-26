import React from "react";
import { useContext } from "react";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import LoginDialog from "./account/LoginDialog";
import { AccountContext } from "../context/AccountProvider";
import ChatDailog from "./chat/chatDailog";
const Component = styled(Box)`
  height: 100vh;
  background-color: #dcdcdc;
`;
const Header = styled(AppBar)`
  height: 80px;
  background-color: #00a884;
  box-shadow: none;
`;
const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00a884;
  box-shadow: none;
`;
const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDailog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar>
              <LoginDialog />
            </Toolbar>
          </LoginHeader>
        </>
      )}
    </Component>
  );
};

export default Messenger;
