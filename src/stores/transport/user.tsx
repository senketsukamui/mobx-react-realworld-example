import axios from "axios";

class UserTransport {
  static getUser() {
    return axios.get("/user");
  }

  static getUserByNickname(nickname: string) {
    return axios.get(`/profiles/${nickname}`);
  }

  static followUser(nickname: string) {
    return axios.post(`/profiles/${nickname}/follow`);
  }

  static unfollowUser(nickname: string) {
    return axios.delete(`/profiles/${nickname}/follow`);
  }
}

export default UserTransport;
