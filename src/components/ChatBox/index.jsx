import { MessageItem } from '../MessageItem';

export const ChatBox = ({ messages, loadMessages }) => {
  const sortedMessages = messages.sort((a, b) => a.timestamp - b.timestamp);

  const allMessages = sortedMessages.map((message) => (
    <MessageItem key={message.key} {...message} />
  ));
  return !loadMessages ? (
    <div className='border-t-4 border-b-4 border-blue-500 rounded-full w-5 h-5 m-auto animate-spin'></div>
  ) : (
    <div className='flex flex-col flex-grow justify-end'>{allMessages}</div>
  );
};
