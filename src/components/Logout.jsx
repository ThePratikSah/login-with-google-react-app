import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId = process.env.REACT_APP_CLIENT_ID;

function Logout(props) {
  function onSuccess(res) {
    props.setUser(null);
  }

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
