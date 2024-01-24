import { useState } from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { IconInputField } from "../../components/IconInputField";
import avatar from "../../assets/pngwing.com.png";
import { ChatBoxDetails } from "../../components/ChatBoxDetails";
import { ChatBox } from "../../components/ChatBox";
import { ConversationsPanel } from "../../components/ConversationsPanel";

export const ChatPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
    if (e.key === "Enter" && searchValue.trim()) {
      handleSearchClick(e);
    }
  };

  const handleSearchClick = (e) => {
    if (e.key === "Enter" && searchValue.trim()) {
      setSearchValue(e.target.value);
    }
    setSearchValue(e.target.value);
  };

  const handleMessageInputChange = (e) => {
    setMessageValue(e.target.value);
    if (e.key === "Enter" && messageValue.trim()) {
      handleSendMessageClick(e);
    }
  };

  const handleSendMessageClick = (e) => {
    if (e.key === "Enter" && searchValue.trim()) {
      setMessageValue(e.target.value);
    }
    setMessageValue(e.target.value);
  };
  console.log("the search value is :", searchValue);
  console.log("the message value is :", messageValue);
  return (
    <div className="w-screen h-screen flex">
      <ConversationsPanel
        value={searchValue}
        onChange={handleSearchInputChange}
        onSubmit={handleSearchClick}
      />
      <div className="flex flex-col w-full bg-white ">
        <div className="bg-slate-50 flex border-b-2 items-center p-2">
          <ChatBoxDetails avatar={avatar} isOnline={false} />
        </div>
        <div className="flex-row flex-grow m-3">
          <ChatBox />
        </div>
        <div className="flex border-2 m-4 justify-center bg-slate-100 rounded-xl flex-row bottom-5 h-10">
          <IconInputField
            icon={faPaperPlane}
            placeholder="Enter text here ......"
            value={messageValue}
            onChange={handleMessageInputChange}
            onSubmit={handleSendMessageClick}
          />
        </div>
      </div>
    </div>
  );
};
