"use client";
import { useChat } from "ai/react";
import React from "react";

function ChatAI() {
  const { messages, handleSubmit, handleInputChange, input } = useChat();
  console.log(messages);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex pt-[50px] justify-center">
          <div className="block">
            <input
              className=" w-[580px] h-[40px] pl-[20px] outline-none bg-[#23586d9d] text-[#fff] placeholder:text-[#fff] placeholder:hover:text-[#ffffffa4] border-[2px] placeholder:duration-300 border-[#cfcece86] rounded-[20px]"
              value={input}
              onChange={handleInputChange}
              type="text"
              placeholder="message Chat AI"
            />
          </div>
          <button
            type="submit"
            className="w-[40px] ml-[20px] h-[40px] hover:bg-[#ffffff79] duration-300 bg-[#fff] hover:border-[#fff0] rounded-[50%] border-[3px] border-[#ffffff] flex justify-center"
          >
            <img
              className="w-[22px] h-[18px] mt-[8px] ml-[2px]"
              src="https://cdn-icons-png.flaticon.com/256/736/736212.png"
              alt="send"
            />
          </button>
        </div>
      </form>
      <div>
        <ul>
          {messages.map((m, index) => (
            <div className=" block w-[580px] ml-[640px] h-auto bg-[#ffffff8c] border-[2px] border-[#fff] mt-[20px] rounded-[20px]">
              <h3 className="flex justify-center p-[10px]" key={index}>
                {m.role === "user" ? "CrayzeS: " : "Chat: "}
                {m.content}
              </h3>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ChatAI;
