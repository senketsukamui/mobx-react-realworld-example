import axios from "axios";
import { IUpdateUserObject } from "../user/types";

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

  static updateUser(info: IUpdateUserObject) {
    return axios.put("/user", { user: info });
  }
}

export default UserTransport;
