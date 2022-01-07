import { FunctionComponent } from "react";
import Home from "@/pages/Home";
import Auth from "@/pages/Auth";
import UserProfile from "./pages/UserProfile";

interface IRoute {
  path: string;
  component: FunctionComponent;
}

const routes: IRoute[] = [
  { path: "/", component: Home },
  { path: "/register", component: Auth },
  { path: "/login", component: Auth },
  { path: "/@:user", component: UserProfile },
];

export default routes;
