import React from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import { authAction } from "../../Store/Slices/authenticationSlice";
const clientId = process.env.Client_ID;

function Logout() {
  const dispatch = useDispatch();
  const onSuccess = () => {
    dispatch(authAction.setFalse());
    alert("Logout made Sucessfully");
  };
  return (
    <div className="logoutdiv">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
