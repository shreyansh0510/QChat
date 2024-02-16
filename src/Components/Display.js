import React, { useState } from "react";
import Keyboard from "./Keyboard";
import { MehOutlined } from "@ant-design/icons";

function Display() {
  const [messages, setMessages] = useState([]);

  return (
    <>
      <div className="flex flex-col  my-8 w-full ">
        {messages.length < 1 && (
          <div className="flex items-center justify-center text-2xl font-semibold ">
            <span>No messages to display</span>
          </div>
        )}
        {messages.map((msg, index) => {
          return (
            <div key={index} className="flex my-2">
              <div className="h-8 w-8 rounded-full  bg-orange-300 text-white flex justify-center items-center ">
                {msg.userName[0]}
              </div>

              <div className="ml-2 w-full">
                <div className="flex justify-between items-center">
                  <div className="font-semibold ">{msg.userName}</div>
                  <div className="font-normal text-xs text-slate-400">
                    {msg.time}
                  </div>
                </div>
                <div className="border border-slate-200 px-2 py-2 rounded-md text-slate-400 min-w-auto">
                  {msg.userMsg}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Keyboard messages={messages} setMessages={setMessages} />
    </>
  );
}

export default Display;
