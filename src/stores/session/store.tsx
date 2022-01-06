import { makeAutoObservable, reaction } from "mobx";

class SessionStore {
  public token = window.localStorage.getItem("token");

  constructor() {
    makeAutoObservable(this);
    reaction(
      () => this.token,
      (token) => {
        console.log("reaction");
        if (token) {
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
