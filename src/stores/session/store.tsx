import { makeAutoObservable, reaction } from "mobx";
import axios from "axios";
import UserStore from "../user";
class SessionStore {
  public token = window.localStorage.getItem("token");
  public loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
    if (this.token)
      axios.defaults.headers.common["Authorization"] = `Token ${this.token}`;
    reaction(
      () => this.token,
      (token) => {
        if (token) {
          axios.defaults.headers.common[
            "Authorization"
          ] = `Token ${this.token}`;
          window.localStorage.setItem("token", token);
        } else {
          axios.defaults.headers.common["Authorization"] = "";
          window.localStorage.removeItem("token");
        }
      }
    );
  }

  public logout() {
    this.token = "";
    UserStore.logoutUser();
  }

  public setToken(token: string) {
    this.token = token;
  }
}

export default new SessionStore();
