import axios from "axios";

class UserTransport {
  static getUser() {
    return axios.get("/user");
  }
}

export default UserTransport;
