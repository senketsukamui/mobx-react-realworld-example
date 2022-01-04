import { FunctionComponent } from "react";
import Home from "@/pages/Home";

interface IRoute {
  path: string;
  component: FunctionComponent;
}

const routes: IRoute[] = [{ path: "/", component: Home }];

export default routes;
