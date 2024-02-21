import axios from 'axios';
import { GET_ALL_USERS_URL } from '../constants';

export const getAllUsers = async () => {
  const token = localStorage.getItem('token');
  return axios.get(GET_ALL_USERS_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
