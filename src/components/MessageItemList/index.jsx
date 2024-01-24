import { messagesMock } from "../../utils/messages";
import { MessageItem } from "../MessageItem";

export const MessageItemList = ({ fristUserId, secondUserId }) => {
  const messagesFristUserSent = messagesMock.map((message) => {
    if (
      message.senderId === fristUserId &&
      message.receiverId === secondUserId
    ) {
      return (
        <MessageItem
          key={fristUserId}
          isSender={message.senderId === fristUserId}
          message={message.body}
          timestamp={message.timestamp}
        />
      );
    }
  });

  const messagesSecondUserSent = messagesMock.map((message) => {
    if (
      message.senderId === secondUserId &&
      message.receiverId === fristUserId
    ) {
      return (
        <MessageItem
          key={secondUserId}
          isSender={message.senderId === fristUserId}
          message={message.body}
          timestamp={message.timestamp}
        />
      );
    }
  });
  const allMessages = [...messagesFristUserSent, ...messagesSecondUserSent];
  return <>{allMessages}</>;
};
