import { makeAutoObservable } from "mobx";
import { transport } from "../transport";
import { IUserInfo, IUserProfile } from "./types";

class UserStore {
  public user: IUserInfo = {
    bio: "",
    email: "",
    image: "",
    token: "",
    username: "",
  };

  public userInfo: IUserProfile = {
    bio: "",
    image: "",
    username: "",
    following: false,
  };

  public loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  public getUser(name: string) {
    this.loading = true;
    return transport.userTransport
      .getUserByNickname(name)
      .then((response) => {
        this.userInfo = response.data.profile;
      })
      .finally(() => (this.loading = false));
  }

  public getCurrentUser() {
    this.loading = true;
    return transport.userTransport
      .getUser()
      .then((response) => {
        this.user = response.data.user;
      })
      .finally(() => (this.loading = false));
  }

  public followUser(name: string) {
    this.loading = true;
    return transport.userTransport
      .followUser(name)
      .then((response) => {
        this.userInfo = response.data.profile;
      })
      .finally(() => (this.loading = false));
  }

  public unfollowUser(name: string) {
    this.loading = true;
    return transport.userTransport
      .unfollowUser(name)
      .then((response) => {
        this.userInfo = response.data.profile;
      })
      .finally(() => (this.loading = false));
  }
}

export default new UserStore();
