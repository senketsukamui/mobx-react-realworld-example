import React, { FunctionComponent } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "@/routes";
import Navbar from "@/components/Navbar";
import axios from "axios";

axios.defaults.baseURL = "https://conduit.productionready.io/api";

const App: FunctionComponent = () => {
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
