// import { useState } from "react";
import {
  faPaperPlane,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { IconInputField } from "../../components/IconInputField";
import { UserItem } from "../../components/UserItem/index";
import image from "../../assets/pngwing.com.png";
import { ChatBoxDetails } from "../../components/ChatBoxDetails";
import { ChatBox } from "../../components/ChatBox";

export const ChatPage = () => {
  //   const [data, setData] = useState([]);
  //   const [value, setValue] = useState("");
  return (
    <div className="w-screen h-screen bg-slate-400 flex">
      <div className=" bg-slate-50 flex-col w-1/4 p-4">
        <IconInputField icon={faMagnifyingGlass} placeholder="Search ......" />
        <UserItem
          userName="Mahmoud abd elaziz hamed"
          AVATAR_SRC={image}
          isOnline={true}
        />
        <UserItem
          userName="Mahmoud abd elaziz hamed"
          AVATAR_SRC={image}
          isOnline={true}
        />
        <UserItem
          userName="Mahmoud abd elaziz hamed"
          AVATAR_SRC={image}
          isOnline={true}
        />
        <UserItem
          userName="Mahmoud abd elaziz hamed"
          AVATAR_SRC={image}
          isOnline={true}
        />
        <UserItem
          userName="Mahmoud abd elaziz hamed"
          AVATAR_SRC={image}
          isOnline={true}
        />
        <UserItem
          userName="Mahmoud abd elaziz hamed"
          AVATAR_SRC={image}
          isOnline={true}
        />
        <UserItem
          userName="Mahmoud abd elaziz hamed"
          AVATAR_SRC={image}
          isOnline={true}
        />
        <UserItem
          userName="Mahmoud abd elaziz hamed"
          AVATAR_SRC={image}
          isOnline={true}
        />
      </div>
      <div className="flex-col w-full m-0 bg-violet-200">
        <div className="bg-violet-400 flex-row h-16">
          <ChatBoxDetails
            AVATAR_SRC={image}
            userName="mahmoud abd elaziz hamed"
            isOnline={false}
          />
        </div>
        <div className="flex-row m-3">
          <ChatBox />
        </div>
        <div className="flex-row">
          <IconInputField
            icon={faPaperPlane}
            placeholder="Enter text here ......"
          />
        </div>
      </div>
    </div>
  );
};
