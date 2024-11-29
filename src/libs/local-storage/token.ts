export const localStorageToken = {
  getAccessToken: (): string | null => {
    return localStorage.getItem('token') ?? '';
  },

  setAccessToken: (accessToken?: string) => {
    if (!accessToken) {
      localStorage.removeItem('token');
      return;
    }
    localStorage.setItem('token', accessToken);
  },

  removeAccessToken: () => {
    localStorage.removeItem('token');
  },
};
