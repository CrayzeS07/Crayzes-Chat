import ChatAI from "../components/chat";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div>
        <ChatAI />
      </div>
    </>
  );
}
