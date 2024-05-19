import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import AuthProfile from "./authProfile";

const AuthLogin = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};
<AuthProfile />

export default AuthLogin;