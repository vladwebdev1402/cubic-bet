import axios, { AxiosError } from 'axios';

export const apiInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://api.lettobet.dev.bet4skill.com/api',
});

apiInstance.interceptors.response.use(
  (res) => res,
  (error: AxiosError<{ message: string }>) => {
    if (error.response) throw new Error(error.response.data.message);
    return Promise.reject(error);
  },
);
