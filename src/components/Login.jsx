import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId = process.env.REACT_APP_CLIENT_ID;

function Login(props) {
  function onSuccess(res) {
    props.setUser(res.profileObj);
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
