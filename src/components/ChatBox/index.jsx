import { MessageItem } from "../MessageItem/index";
export const ChatBox = () => {
  return (
    <>
      <MessageItem
        isSender={true}
        message="hello my name is mahmoud"
        timestamp="11:04"
      />
      <MessageItem
        isSender={false}
        message="hello my name is mahmoud"
        timestamp="11:04"
      />
      <MessageItem
        isSender={true}
        message="hello my name is mahmoud"
        timestamp="11:04"
      />
      <MessageItem
        isSender={false}
        message="hello my name is mahmoud"
        timestamp="11:04"
      />
      <MessageItem
        isSender={true}
        message="hello my name is mahmoud"
        timestamp="11:04"
      />
      <MessageItem
        isSender={false}
        message="hello my name is mahmoud"
        timestamp="11:04"
      />
    </>
  );
};
