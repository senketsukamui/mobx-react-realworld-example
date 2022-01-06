import { makeAutoObservable } from "mobx";
import { transport } from "../transport";
import SessionStore from "../session";

interface IFormValues {
  username: string;
  password: string;
  email: string;
}

class AuthStore {
  public loading: boolean = false;

  public formValues: IFormValues = {
    username: "",
    password: "",
    email: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  public setFormValues(field: keyof IFormValues, value: string) {
    this.formValues[field] = value;
  }

  public login(email: string, password: string) {
    this.loading = true;
    return transport.authTransport
      .login(email, password)
      .then((response) => {
        SessionStore.setToken(response.data.user.token);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  public register(email: string, password: string, username: string) {
    this.loading = true;
    return transport.authTransport
      .register(email, password, username)
      .then((response) => {
        SessionStore.setToken(response.data.user.token);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  public clearFormValues() {
    this.formValues = {
      username: "",
      password: "",
      email: "",
    };
  }
}

export default new AuthStore();
