import { createContext } from "react";
import AuthStore from "./auth";
import SessionStore from "./session";

export const rootStoreContext = createContext({
  authStore: AuthStore,
  sessionStore: SessionStore,
});
