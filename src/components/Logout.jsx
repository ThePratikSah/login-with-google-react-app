import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "56109275176-3t0s4t70ot7smt8gq4jarad162uqn0vm.apps.googleusercontent.com";

function Logout() {
  function onSuccess(res) {
    alert("Logged out successfully");
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
