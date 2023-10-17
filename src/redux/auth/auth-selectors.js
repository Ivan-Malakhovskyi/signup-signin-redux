const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getRefresh = state => state.auth.isRefresh;

export const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getRefresh,
};
