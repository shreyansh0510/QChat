import { SendOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const names = ["Alan", "Bob", "Carol", "Dean", "Elin"];

function Keyboard({ setMessages }) {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClick = () => {
    setMessage("");

    let randomIndex = Math.floor(Math.random() * names.length);
    let currentUsername = names[randomIndex];

    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let meridiem = hours > 12 ? "PM" : "AM";
    let currentTime = `${hours}:${minutes} ${meridiem}`;

    let data = {
      userName: currentUsername,
      userMsg: message,
      time: currentTime,
    };

    setMessages((messages) => [...messages, data]);
  };

  return (
    <>
      <div className="flex items-center ">
        <input
          type="text"
          className="outline-slate-100 border border-slate-300 px-2 py-2 rounded-md text-slate-400 w-full"
          name="message"
          value={message}
          onChange={handleChange}
        />
        <button className="ml-2" onClick={handleClick}>
          <SendOutlined className="text-2xl" />
        </button>
      </div>
    </>
  );
}

export default Keyboard;
