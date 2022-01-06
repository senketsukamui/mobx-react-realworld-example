import { makeAutoObservable, reaction } from "mobx";
import axios from "axios";
class SessionStore {
  public token = window.localStorage.getItem("token");

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
          window.localStorage.removeItem("token");
        }
      }
    );
  }

  public setToken(token: string) {
    this.token = token;
  }
}

export default new SessionStore();
