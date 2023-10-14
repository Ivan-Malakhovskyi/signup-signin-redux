const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.user.name;

export const authSelectors = {
  getIsLoggedIn,
  getUserName,
};
