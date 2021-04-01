const getUsername = state => state.auth.user.name;
const getIsAuthenticated = state => state.auth.token?.accessToken;

export { getIsAuthenticated, getUsername };
