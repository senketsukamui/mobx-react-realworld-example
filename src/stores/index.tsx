import { createContext } from "react";
import AuthStore from "./auth";
import SessionStore from "./session";
import UserStore from "./user";

export const rootStoreContext = createContext({
  authStore: AuthStore,
  sessionStore: SessionStore,
  userStore: UserStore,
});
