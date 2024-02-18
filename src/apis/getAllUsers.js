import axios from 'axios';

export const getAllUsers = async () => {
  try {
    const token = localStorage.getItem('token');
    return axios.get('http://localhost:3000/user', {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};
