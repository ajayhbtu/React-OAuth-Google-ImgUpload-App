import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Image from "./Image";
import "../styles.css";

function App(props) {
  return (
    <div>
      <Login />
      <Logout />
      <Image className="img-container" withPreview={true} />
    </div>
  );
}

export default App;
