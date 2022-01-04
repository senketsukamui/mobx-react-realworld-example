import { makeAutoObservable } from "mobx";
import { transport } from "../transport";

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

  public login() {
    this.loading = true;
    transport.authTransport
      .login(this.formValues.email, this.formValues.password)
      .then((response) => {
        console.log(response);
      });
  }

  public register() {
    this.loading = true;
    transport.authTransport
      .register(
        this.formValues.email,
        this.formValues.password,
        this.formValues.username
      )
      .then((response) => {
        console.log(response);
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

export default AuthStore;
