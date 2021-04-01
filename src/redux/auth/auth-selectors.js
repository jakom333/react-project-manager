const getIsAuthenticated = state => state.auth.token?.accessToken;

export { getIsAuthenticated };
