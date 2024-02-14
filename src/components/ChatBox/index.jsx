import { useMemo } from 'react';
import { mockMessages } from '../../utils/messages';
import { MessageItem } from '../MessageItem';

export const ChatBox = ({ receiver }) => {
  const CURRENT_USER_ID = 1;
  const secondUserId = receiver.id;
  const filteredMessages = useMemo(
    () =>
      mockMessages.filter(
        (message) =>
          (message.senderId === CURRENT_USER_ID &&
            message.receiverId === secondUserId) ||
          (message.senderId === secondUserId &&
            message.receiverId === CURRENT_USER_ID)
      ),
    [CURRENT_USER_ID, secondUserId]
  );
  const sortedMessages = useMemo(
    () => filteredMessages.sort((a, b) => a.timestamp - b.timestamp),
    [filteredMessages]
  );

  const messages = sortedMessages.map((message) => (
    <MessageItem
      key={message.id}
      isSender={message.senderId === CURRENT_USER_ID}
      message={message.body}
      timestamp={message.timestamp}
    />
  ));
  return (
    <>
      {messages.length ? (
        messages
      ) : (
        <div className='flex justify-center items-center h-full'>
          There is now messages to display ........
        </div>
      )}
    </>
  );
};
