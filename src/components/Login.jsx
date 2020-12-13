import React, { useState } from "react";
import GoogleLogin from "react-google-login";

function Login(props) {
  const [name, setName] = useState("Guest");
  const [email, setEmail] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const onSuccess = (res) => {
    setName(res.profileObj.name);
    setEmail(res.profileObj.email);
    setImgUrl(res.profileObj.imageUrl);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login!`);
  };

  return (
    <div>
      <div>
        <h2>Welcome {name}!</h2>
        <p>{email}</p>
        <img src={imgUrl} alt={name === "Guest" ? "" : name}></img>
      </div>
      <GoogleLogin
        clientId="159620068686-ijluvm55n3rb6mi7jtjf8j350shu0odk.apps.googleusercontent.com"
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
