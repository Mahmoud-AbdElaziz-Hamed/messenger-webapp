import { useEffect, useRef } from 'react';
import { getTime } from '../../utils/getTime';

export const MessageItem = ({ isSender, message, timestamp }) => {
  const messageClasses = `p-4 w-fit rounded-t-3xl my-2 text-black ${
    isSender
      ? 'bg-sky-50 ml-auto rounded-bl-3xl'
      : 'bg-slate-50 mr-auto rounded-br-3xl'
  }`;

  const timestampClasses = `text-gray-400 text-black text-xs ${
    isSender ? `ml-auto` : `mr-auto`
  }`;

  const messageRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, []);

  const scrollToBottom = () => {
    messageRef.current?.scrollIntoView({
      behavior: 'auto',
    });
  };

  return (
    <div className='flex-row'>
      <div
        className={`flex w-3/5 whitespace-normal break-all ${messageClasses} ${
          isSender ? 'flex-row-reverse' : ''
        }`}
        ref={messageRef}
      >
        {message}
      </div>
      <div
        className={`flex ${timestampClasses} ${
          isSender ? 'flex-row-reverse' : ''
        }`}
      >
        {getTime(timestamp)}
      </div>
    </div>
  );
};
