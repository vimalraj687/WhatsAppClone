import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";

function App() {
  const clientId =
    "357933280864-e4bhg6tvi3sppn93hgj2l0cs3bnks7di.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
