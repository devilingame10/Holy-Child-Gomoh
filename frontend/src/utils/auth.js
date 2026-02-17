import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const login = async (email, password) => {
  const response = await axios.post(`${API}/auth/login`, { email, password });
  localStorage.setItem('token', response.data.token);
  return response.data;
};

export const register = async (email, password, name) => {
  const response = await axios.post(`${API}/auth/register`, { email, password, name });
  localStorage.setItem('token', response.data.token);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const getCurrentUser = async () => {
  const response = await axios.get(`${API}/auth/me`, getAuthHeaders());
  return response.data;
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};