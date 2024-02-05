import { mockMessages } from '../../utils/messages';
import { MessageItem } from '../MessageItem';

export const ChatBox = () => {
  const CURRENT_USER_ID = 1;
  const SECOND_USER_ID = 3;
  const filteredMessages = mockMessages.filter(
    (message) =>
      (message.senderId === CURRENT_USER_ID &&
        message.receiverId === SECOND_USER_ID) ||
      (message.senderId === SECOND_USER_ID &&
        message.receiverId === CURRENT_USER_ID)
  );
  const sortedMessages = filteredMessages.sort(
    (a, b) => a.timestamp - b.timestamp
  );

  const messages = sortedMessages.map((message) => (
    <MessageItem
      key={message.id}
      isSender={message.senderId === CURRENT_USER_ID}
      message={message.body}
      timestamp={message.timestamp}
    />
  ));
  return <>{messages}</>;
};
