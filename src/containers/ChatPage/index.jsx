import axios from 'axios';
import avatar from '../../assets/pngwing.com.png';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
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
  const [filteredUsers, setFilteredUsers] = useState([...users]);

  const navigate = useNavigate();

  const currentUserId = Number(localStorage.getItem('currentUserId'));
  const token = localStorage.getItem('token');

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
    const filteredUsers = users.filter(({ username }) =>
      username.toLowerCase().includes(e.target.value.trim().toLowerCase())
    );
    setFilteredUsers(filteredUsers);
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

  const handleLogoutClick = () => {
    localStorage.clear();
    navigate('/');
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

  useEffect(() => {
    try {
      const fetchUsers = async () => {
        const response = await getAllUsers();
        const users = [...response.data].filter(
          ({ id }) => id !== currentUserId
        );
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
    <div className='w-full h-screen flex'>
      <div
        className={
          receiverId === 0
            ? '2xl:w-72 xl:w-72 lg:w-72 md:w-72 w-full'
            : 'w-72 hidden md:inline-block lg:inline-block xl:inline-block 2xl:inline-block'
        }
      >
        <ConversationsPanel
          isOnline={isOnline}
          value={searchValue}
          onChange={handleSearchInputChange}
          onSubmit={handleSearchClick}
          onClick={handleUserItemClick}
          onKeyDown={(e) => handleKeyPress(e)}
          users={searchValue ? filteredUsers : users}
          icon={faRightFromBracket}
          onLogoutClick={handleLogoutClick}
        />
      </div>
      <div
        className={
          receiverId === 0 ? 'hidden' : 'flex flex-col w-full bg-white'
        }
      >
        <div className='bg-slate-50 flex border-b-2 items-center p-2 flex-shrink-0'>
          <ChatBoxDetails
            iconClassName='w-10 my-auto hover:cursor-pointer mr-2 lg:hidden md:hidden 2xl:hidden xl:hidden'
            onClick={() => setReceiverId(0)}
            icon={faArrowLeft}
            avatar={avatar}
            isOnline={isOnline}
            receiver={secondUser}
          />
        </div>
        <div className='flex flex-col grow m-3 overflow-y-scroll'>
          <ChatBox
            receiverId={receiverId}
            senderId={currentUserId}
            messages={messages}
          />
        </div>
        <div className='flex border-2 m-4 justify-center bg-slate-100 rounded-md flex-row  h-10 flex-shrink-0'>
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
