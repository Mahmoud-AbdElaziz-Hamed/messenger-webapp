import { MessageItem } from '../MessageItem';

export const ChatBox = ({ senderId, messages }) => {
  const firstUserId = senderId;
  const filteredMessages = messages;

  const sortedMessages = filteredMessages.sort(
    (a, b) => a.timestamp - b.timestamp
  );

  const allMessages = sortedMessages.map((message) => (
    <MessageItem
      key={message.id}
      isSender={message.senderId === firstUserId}
      message={message.body}
      timestamp={message.timestamp}
    />
  ));
  return <>{allMessages}</>;
};
