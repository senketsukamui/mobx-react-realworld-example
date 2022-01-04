import axios from "axios";

class AuthTransport {
  static login(email: string, password: string) {
    return axios.post("/users/login", {
      user: { email: email, password },
    });
  }

  static register(email: string, password: string, username: string) {
    return axios.post("/users", {
      user: { email: email, password: password, username: username },
    });
  }
}

export default AuthTransport;
