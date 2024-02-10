const getIsAuthenticated = (state) => state.auth.isAuthenticated;
const getUserName = (state) => state.auth.user.name;
const getUserSurname = (state) => state.auth.user.surname;

const authSelectors = {
  getIsAuthenticated,
  getUserName,
  getUserSurname,
};

export default authSelectors;
