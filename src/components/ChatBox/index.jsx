import { MessageItem } from '../MessageItem';

export const ChatBox = ({ messages }) => {
  const sortedMessages = messages.sort((a, b) => a.timestamp - b.timestamp);

  const allMessages = sortedMessages.map((message) => (
    <MessageItem key={message.key} {...message} />
  ));
  return (
    <div className='flex flex-col flex-grow justify-end'>{allMessages}</div>
  );
};
