import { useEffect, useState } from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { IconInputField } from '../../components/IconInputField';
import avatar from '../../assets/pngwing.com.png';
import { ChatBoxDetails } from '../../components/ChatBoxDetails';
import { ChatBox } from '../../components/ChatBox';
import { ConversationsPanel } from '../../components/ConversationsPanel';
import { usersMock } from '../../utils/users';

export const ChatPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [isOnline, setIsOnline] = useState(true);
  const [receiverId, setReceiverId] = useState(0);
  const [secondUser, setSecondUser] = useState({});

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
    if (e.key === 'Enter' && searchValue.trim()) {
      handleSearchClick(e);
    }
  };

  const handleSearchClick = (e) => {
    setSearchValue(e.target.value);
  };

  const handleMessageInputChange = (e) => {
    setMessageValue(e.target.value);
    if (e.key === 'Enter' && messageValue.trim()) {
      handleSendMessageClick(e);
    }
  };

  const handleSendMessageClick = (e) => {
    setMessageValue(e.target.value);
  };

  const handleUserItemClick = (id) => {
    setReceiverId(id);
  };
  useEffect(() => {
    if (receiverId !== 0) {
      const user = usersMock.find((user) => user.id === receiverId);
      setSecondUser(user);
    }
  }, [receiverId]);

  return (
    <div className='w-screen h-screen flex'>
      <ConversationsPanel
        isOnline={isOnline}
        value={searchValue}
        onChange={handleSearchInputChange}
        onSubmit={handleSearchClick}
        onClick={handleUserItemClick}
        className={receiverId === 0 ? 'w-screen' : ''}
      />
      <div
        className={
          receiverId === 0 ? 'hidden' : 'flex flex-col w-full bg-white'
        }
      >
        <div className='bg-slate-50 flex border-b-2 items-center p-2'>
          <ChatBoxDetails
            avatar={avatar}
            isOnline={isOnline}
            receiver={secondUser}
          />
        </div>
        <div className='flex-row flex-grow m-3'>
          <ChatBox receiver={secondUser} />
        </div>
        <div className='flex border-2 m-4 justify-center bg-slate-100 rounded-xl flex-row bottom-5 h-10'>
          <IconInputField
            icon={faPaperPlane}
            placeholder='Enter text here ......'
            value={messageValue}
            onChange={handleMessageInputChange}
            onSubmit={handleSendMessageClick}
          />
        </div>
      </div>
    </div>
  );
};
