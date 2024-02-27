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
import { UsersSideList } from '../../components/UsersSideList';
import { getAllUsers } from '../../apis/getAllUsers';
import { getAllMessages } from '../../apis/getAllMessages';
import { GET_MESSAGES_URL } from '../../constants';
import { getRandomId } from '../../utils/getRandomId';

export const ChatPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
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

  const handleMessageInputChange = (e) => {
    setMessageValue(e.target.value);
  };

  const handleSendMessageClick = (e) => {
    e.preventDefault();
    if (messageValue.trim()) {
      sendMessage();
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

  const handleLogoutClick = () => {
    localStorage.clear();
    navigate('/login');
  };

  const sendMessage = async () => {
    try {
      if (token && receiverId !== 0) {
        const randomMessageId = getRandomId();
        const newMessage = {
          id: randomMessageId,
          body: messageValue,
          senderId: currentUserId,
          timestamp: Date.now(),
        };
        const totalMessages = [...messages, newMessage];
        setMessages(totalMessages);
        const response = await axios.post(
          GET_MESSAGES_URL,

          {
            body: messageValue,
            receiverId: receiverId,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const returnedMessage = { ...response.data.message };
        const updatedMessages = totalMessages.map((message) =>
          message.id === randomMessageId ? returnedMessage : message
        );
        setMessages(updatedMessages);
        setMessageValue('');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      if (error.code === 'ERR_NETWORK') {
        alert('Network error occurred. Please check your internet connection.');
      } else {
        alert('An error occurred. Please try again later.');
      }
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await getAllMessages(receiverId);
        if (response) {
          const messages = [...response.data];
          setMessages(messages);
        }
      } catch (error) {
        console.error('Error fetching messages data:', error);
        if (error.code === 'ERR_NETWORK') {
          alert(
            'Network error occurred. Please check your internet connection.'
          );
        } else {
          alert('An error occurred. Please try again later.');
        }
      }
    };

    fetchMessages();
  }, [receiverId]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        const users = [...response.data].filter(
          ({ id }) => id !== currentUserId
        );
        setUsers(users);
      } catch (error) {
        console.error('Error fetching users data:', error);
        if (error.code === 'ERR_NETWORK') {
          alert(
            'Network error occurred. Please check your internet connection.'
          );
        } else {
          alert('An error occurred. Please try again later.');
        }
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className='w-full h-screen flex'>
      <div
        className={
          receiverId === 0
            ? 'md:w-72 w-full flex shrink-0'
            : 'w-72 hidden md:inline-block shrink-0'
        }
      >
        <UsersSideList
          value={searchValue}
          onSearchChange={handleSearchInputChange}
          onClick={handleUserItemClick}
          onKeyDown={handleKeyPress}
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
        <div className='bg-slate-50 flex border-b-2 items-center p-2 shrink-0'>
          <ChatBoxDetails
            iconClassName='w-10 my-auto hover:cursor-pointer mr-2 md:hidden'
            onClick={() => setReceiverId(0)}
            icon={faArrowLeft}
            avatar={avatar}
            receiver={secondUser}
          />
        </div>
        <div className='h-full m-3 flex flex-col overflow-y-auto'>
          <ChatBox
            receiverId={receiverId}
            messages={messages.map((message) => ({
              key: message.id,
              isSender: message.senderId === currentUserId,
              body: message.body,
              timestamp: message.timestamp,
            }))}
          />
        </div>
        <div className='flex border-2 m-4 justify-center bg-slate-100 rounded-md flex-row  h-10 shrink-0'>
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
