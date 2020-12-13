import React from "react";
import { GoogleLogout } from "react-google-login";

function Logout(props) {
  const onSuccess = () => {
    console.log("Logout made successfully");
    alert("Logout made successfully ✌");
  };

  return (
    <div>
      <GoogleLogout
        clientId="159620068686-ijluvm55n3rb6mi7jtjf8j350shu0odk.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
