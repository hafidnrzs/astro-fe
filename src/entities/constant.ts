export const ENDPOINT = {
  AUTH: {
    POST_LOGIN: '/login',
    POST_REGISTER: '/register',
    POST_LOGOUT: '/logout',
    POST_LOGOUT_ALL: '/logout/all',
  },
  USERS: {
    GET_USER_ME: '/user',
    GET_PROFILE: '/profile',
    PUT_UPDATE_PROFILE: '/profile/update',
    PUT_UPDATE_PASSWORD: '/profile/update/password',
    POST_UPDATE_AVATAR: '/profile/update/avatar',
    POST_UPDATE_BACKGROUND: '/profile/update/background',
    POST_UPDATE_CV: '/profile/update/cv',
  },
  PROJECTS: {
    GET_ALL_PROJECTS: '/projects/all',
    GET_DETAIL_PROJECT: '/projects/view/:slug',
    POST_CREATE_PROJECT: '/projects/create',
  },
  GENERATE: {
    POST_GENERATE: '/generate',
  },
};

export const ROUTE_URL = {
  ROOT: '/',
  AUTH: {
    ROOT: '/auth',
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
  },
  USERS: {
    PROFILE: '/users/profile',
    UPDATE_PROFILE: '/users/profile',
    UPDATE_PASSWORD: '/users/profile/password',
  },
  PROJECTS: {
    ROOT: '/projects',
    DETAIL: '/projects/:slug',
    CREATE: '/projects/create',
  },
  GENERATE: {
    ROOT: '/generate',
    RESULT: '/generate/result',
  },
};
