import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId =
  "56109275176-3t0s4t70ot7smt8gq4jarad162uqn0vm.apps.googleusercontent.com";

function Login() {
  function onSuccess(res) {
    alert(`Logged in as: ${res.profileObj.email}`);
  }
  function onFailure(res) {
    // console.log(res);
    alert(`Oops! Some error occured: ${res}`);
  }

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
