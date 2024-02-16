import React from "react";
import "../Styles/tailwind.css";
import { UserOutlined } from "@ant-design/icons";

function Navbar() {
  return (
    <>
      <nav>
        <div className="flex justify-between items-center line-clamp-3 mt-2">
          <div>
            <span className="font-semibold">Introductions</span>
            <br />
            <span className="text-slate-400">
              This channel is for company wide chatter
            </span>
          </div>

          <div className="flex justify-between text-slate-400">
            <span>
              <UserOutlined />
            </span>
          </div>
        </div>
        <div className="border-t border-gray-200 my-4"></div>
      </nav>
    </>
  );
}

export default Navbar;
