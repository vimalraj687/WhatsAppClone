import React from "react";
import { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
const HeaderMenu = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <MoreVert onClick={handleClick} />
      <Menu
        // anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default HeaderMenu;
