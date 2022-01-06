import React, { FunctionComponent } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "@/routes";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useStores } from "@/useStores";

axios.defaults.baseURL = "https://conduit.productionready.io/api";

const App: FunctionComponent = () => {
  const { userStore } = useStores();

  React.useEffect(() => {
    userStore.getCurrentUser();
  }, []);

  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path.toString()} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
