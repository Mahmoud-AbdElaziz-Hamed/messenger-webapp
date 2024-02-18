import axios from 'axios';

export const getAllMessages = async (receiverId) => {
  try {
    const token = localStorage.getItem('token');
    if (receiverId !== 0) {
      return await axios.get(`http://localhost:3000/message/${receiverId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};
