import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { useContext } from "react";
import React from "react";
import { qrCodeImage } from "../../consence/data";
import { GoogleLogin } from "@react-oauth/google";
import { AccountContext } from "../../context/AccountProvider";
import jwt_decode from "jwt-decode";
const Component1 = styled(Box)`
  display: flex;
  padding: 64px 60px 60px;
`;
const Container1 = styled(Box)`
  margin-left: 58px;
`;
const QRcode = styled("img")({
  height: 274,
  width: 274,
});
const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 15px;
`;
const dialogstyle = {
  height: "96%",
  marginTop: "12%",
  width: "70%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
  backgroundColor: "none",
};
const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 33px;
    color: #4a4a4a;
  }
`;
const LoginDiaog = () => {
  const { setAccount } = useContext(AccountContext);
  const onLoginsuccess = (res) => {
    const decoded = jwt_decode(res.credential);
    console.log(decoded);
    setAccount(decoded);
  };
  const OrLoginError = (res) => {
    console.log("login failed");
  };
  return (
    <>
      <Dialog open={true} PaperProps={{ sx: dialogstyle }} hideBackdrop={true}>
        <Component1>
          <Box>
            <Title>Use WhatsApp on your computer</Title>
            <StyledList>
              <ListItem>1. Open Whatsapp on Your Phone</ListItem>
              <ListItem>
                2. Tap Menu : or Settings and select Linked Devices
              </ListItem>
              <ListItem>3. Tap on Link a device</ListItem>
              <ListItem>
                4. Point your phone to this screen to capture the QR code
              </ListItem>
            </StyledList>
          </Box>
          <Container1 style={{ position: "relative" }}>
            <QRcode src={qrCodeImage} alt="qr code" />
            <Box
              style={{
                position: " absolute",
                top: "50%",
                transform: "translatex(25%)",
              }}
            >
              <GoogleLogin onSuccess={onLoginsuccess} onError={OrLoginError} />{" "}
            </Box>
          </Container1>
        </Component1>
      </Dialog>
    </>
  );
};

export default LoginDiaog;
// whatsapplogin - 387809;
