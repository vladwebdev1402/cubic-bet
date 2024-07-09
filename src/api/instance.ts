import axios from 'axios';

export const apiInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://api.lettobet.dev.bet4skill.com/api',
});
