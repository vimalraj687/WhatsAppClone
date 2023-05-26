import React from "react";
import { Dialog, Box, styled } from "@mui/material";
import Menu from "../chat/menu/Menu";
import EmptyChat from "./emptyChat/EmptyChat";
const dialogstyle = {
  height: "96%",
  // margin: "0%",
  // maerginTop: "0%",
  margin: "20px",
  width: "100%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

const Component1 = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)`
  min-width: 390px;
`;
const RightComponent = styled(Box)`
  width: 73%;
  min-width: 300px;
  maxwidth: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
  padding-left: 8px;
`;
const chatDailog = () => {
  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dialogstyle }}
      hideBackdrop={true}
      maxWidth={"md"}
    >
      <Component1>
        <LeftComponent>
          <Menu />
        </LeftComponent>
        <RightComponent>
          <EmptyChat />
        </RightComponent>
      </Component1>
    </Dialog>
  );
};

export default chatDailog;
