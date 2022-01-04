import App from "@/components/App";
import { FunctionComponent } from "react";

interface IRoute {
  path: string;
  component: FunctionComponent;
}

const routes: IRoute[] = [{ path: "/", component: App }];

export default routes;
