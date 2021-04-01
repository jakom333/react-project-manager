const getUsername = state => state.auth.user.name;
const getIsAuthenticated = state => state.auth.token?.accessToken;

const getAuthError = state=> state.auth.error

export { getIsAuthenticated, getUsername, getAuthError };
