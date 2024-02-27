import axios from 'axios';
import { GET_MESSAGES_URL } from '../constants';

export const getAllMessages = async (receiverId) => {
  try {
    const token = localStorage.getItem('token');
    if (receiverId !== 0) {
      return await axios.get(`${GET_MESSAGES_URL}/${receiverId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};
