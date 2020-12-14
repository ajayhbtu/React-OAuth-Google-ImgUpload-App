import React, { useState } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import Image from "./Image";

function Auth(props) {
  const [name, setName] = useState("Guest");
  const [email, setEmail] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLoginSuccess = (res) => {
    setName(res.profileObj.name);
    setEmail(res.profileObj.email);
    setImgUrl(res.profileObj.imageUrl);
    setIsLoggedIn(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login!`);
  };

  const onLogoutSuccess = () => {
    setIsLoggedIn(false);
    console.log("Logout made successfully");
    alert("Logout made successfully ✌");
  };

  return isLoggedIn ? (
    <div>
      <div>
        <h2>Welcome {name}!</h2>
        <p>{email}</p>
        <img src={imgUrl} alt={name === "Guest" ? "" : name}></img>
      </div>

      <GoogleLogout
        clientId="159620068686-ijluvm55n3rb6mi7jtjf8j350shu0odk.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={onLogoutSuccess}
      ></GoogleLogout>
      <Image className="img-container" withPreview={true} />
    </div>
  ) : (
    <div>
      <h2>Welcome Guest!</h2>
      <GoogleLogin
        clientId="159620068686-ijluvm55n3rb6mi7jtjf8j350shu0odk.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Auth;
