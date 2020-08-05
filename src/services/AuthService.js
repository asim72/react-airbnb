class AuthService {
  isAuthenticated() {
    const token = localStorage.getItem("auth_token");

    return token ? true : false;
  }

  remove_token() {
    localStorage.removeItem("auth_token");
  }
}

export default new AuthService();
