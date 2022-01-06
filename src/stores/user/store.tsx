import { makeAutoObservable } from "mobx";
import { transport } from "../transport";

class UserStore {
  public user: Object = {};

  constructor() {
    makeAutoObservable(this);
  }

  public getCurrentUser() {
    return transport.userTransport.getUser();
  }
}

export default new UserStore();
