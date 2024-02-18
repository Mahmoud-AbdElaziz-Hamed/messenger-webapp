import axios from 'axios';
import avatar from '../../assets/pngwing.com.png';

import { useEffect, useState } from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { IconInputField } from '../../components/IconInputField';
import { ChatBoxDetails } from '../../components/ChatBoxDetails';
import { ChatBox } from '../../components/ChatBox';
import { ConversationsPanel } from '../../components/ConversationsPanel';
import { getAllUsers } from '../../apis/getAllUsers';
import { getAllMessages } from '../../apis/getAllMessages';

export const ChatPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [isOnline, setIsOnline] = useState(true);
  const [receiverId, setReceiverId] = useState(0);
  const [secondUser, setSecondUser] = useState({});
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  const currentUserId = Number(localStorage.getItem('currentUserId'));
  const token = localStorage.getItem('token');

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = (e) => {
    setSearchValue(e.target.value);
  };

  const handleMessageInputChange = (e) => {
    setMessageValue(e.target.value);
  };

  const handleSendMessageClick = (e) => {
    e.preventDefault();
    sendMessageAndFetchData();
  };

  const sendMessageAndFetchData = async () => {
    try {
      if (token && receiverId !== 0) {
        await axios.post(
          'http://localhost:3000/message',

          {
            body: messageValue,
            receiverId: receiverId,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const response = await getAllMessages(receiverId);
        if (response) {
          const newMessages = [...response.data];
          setMessages(newMessages);
        }
        setMessageValue('');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && messageValue.trim()) {
      handleSendMessageClick(e);
    }
  };

  const handleUserItemClick = (id) => {
    setReceiverId(id);
    if (id !== 0) {
      const user = users.find((user) => user.id === id);
      setSecondUser(user);
    }
  };

  useEffect(() => {
    try {
      const fetchUsers = async () => {
        const response = await getAllUsers();
        const users = [...response.data];
        setUsers(users);
      };
      const fetchMessages = async () => {
        const response = await getAllMessages(receiverId);
        if (response) {
          const messages = [...response.data];
          setMessages(messages);
        }
      };
      fetchUsers();
      fetchMessages();
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }, [receiverId]);

  return (
    <div className='w-full h-full flex'>
      <div className='fixed top-0 bottom-0 left-0 z-20'>
        <ConversationsPanel
          isOnline={isOnline}
          value={searchValue}
          onChange={handleSearchInputChange}
          onSubmit={handleSearchClick}
          onClick={handleUserItemClick}
          className={receiverId === 0 ? 'w-screen' : ''}
          users={users}
        />
      </div>
      <div
        className={
          receiverId === 0
            ? 'hidden'
            : 'flex flex-col w-full bg-white relative lg:pl-72 md:pl-72 pl-0'
        }
      >
        <div className='bg-slate-50 flex border-b-2 items-center p-2 sticky top-0 z-10 w-full'>
          <div>
            <ChatBoxDetails
              avatar={avatar}
              isOnline={isOnline}
              receiver={secondUser}
            />
          </div>
        </div>
        <div className='flex-row flex-grow m-3 min-h-dvh'>
          <ChatBox
            receiverId={receiverId}
            senderId={currentUserId}
            messages={messages}
          />
        </div>
        <div className='flex border-2 m-4 justify-center bg-slate-100 rounded-xl flex-row  h-10 sticky bottom-2 z-10'>
          <IconInputField
            icon={faPaperPlane}
            placeholder='Enter text here ......'
            value={messageValue}
            onChange={handleMessageInputChange}
            onSubmit={(e) => handleSendMessageClick(e)}
            onKeyDown={(e) => handleKeyPress(e)}
          />
        </div>
      </div>
    </div>
  );
};
