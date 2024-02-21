import { MessageItem } from '../MessageItem';

export const ChatBox = ({ messages }) => {
  const filteredMessages = messages;
  const sortedMessages = filteredMessages.sort(
    (a, b) => a.timestamp - b.timestamp
  );

  const allMessages = sortedMessages.map((message) => (
    <MessageItem key={message.key} {...message} />
  ));
  return (
    <div className='flex flex-col flex-grow justify-end'>{allMessages}</div>
  );
};
