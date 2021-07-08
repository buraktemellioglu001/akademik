const ID_TOKEN_KEY = "id_token";

const USER_NAME = "user_name";

export const setUser = uname => {
  window.localStorage.setItem(USER_NAME, uname);
};

export const getUser = () => {
  return window.localStorage.getItem(USER_NAME);
};

export const getToken = () => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

export const saveToken = (token, uname) => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
  setUser(uname);
};

export const destroyToken = () => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
};

export const destroyUSer = () => {
  window.localStorage.removeItem(USER_NAME);
}

export const logOut = () => {
  destroyUSer();
  destroyToken();
}

export default { getToken, saveToken, destroyToken, getUser, setUser , logOut};
