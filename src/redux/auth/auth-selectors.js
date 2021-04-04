const getUsername = state => state.auth.token?.email;
const getIsAuthenticated = state => state.auth.token?.accessToken;

const getAuthError = state => state.auth.error;

export { getIsAuthenticated, getUsername, getAuthError };
