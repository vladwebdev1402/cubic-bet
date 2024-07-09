import { apiInstance } from '@/api';

import { AuthData, User } from '@/type';

export class AuthService {
  static async signIn(data: AuthData) {
    const response = await apiInstance.post<User>('/client-login', data);
    return response.data;
  }

  static async getUser() {
    const response = await apiInstance.get<User>('/auth/me');
    return response.data;
  }
}
