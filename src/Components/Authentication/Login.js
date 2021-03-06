import React from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { authAction } from "../../Store/Slices/authenticationSlice";
import classes from "./Login.module.css";
const clientId =
  "446643779778-7bnj4cu1j6kek62q68nc4g2u41r6r32p.apps.googleusercontent.com";

function Login() {
  const dispatch = useDispatch();
  const onSuccess = (res) => {
    dispatch(authAction.setTrue());
    console.log("[Login Success] Current User : ", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("[Login Failed] res: ", res);
  };
  return (
    <div className={classes.logindiv}>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
