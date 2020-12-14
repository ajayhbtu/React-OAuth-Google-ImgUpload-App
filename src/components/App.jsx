import React from "react";
import Auth from "./Auth";
import Image from "./Image";
import "../styles.css";

function App(props) {
  return (
    <div>
      <Auth />
      <Image className="img-container" withPreview={true} />
    </div>
  );
}

export default App;
