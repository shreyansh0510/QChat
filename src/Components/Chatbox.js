import React from "react";
import Navbar from "./Navbar";
import Display from "./Display";
import "../Styles/tailwind.css";

function Chatbox() {
  return (
    <>
      {/* <h1>CHATBOX</h1> */}
      <div className="px-4">
        <Navbar />
        <Display />
      </div>
    </>
  );
}

export default Chatbox;
