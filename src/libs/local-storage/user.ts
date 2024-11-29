import type { TUserItem } from '@/api/users/type';

export const localStorageUser = {
  setUserData: (user?: TUserItem) => {
    if (!user) {
      localStorage.removeItem('user_data');
      return;
    }
    localStorage.setItem('user_data', JSON.stringify(user));
  },

  getUserData: (): TUserItem => {
    const userData = localStorage.getItem('user_data');
    return JSON.parse(userData ?? '{}');
  },

  removeAccessToken: () => {
    localStorage.removeItem('user_data');
  },
};
