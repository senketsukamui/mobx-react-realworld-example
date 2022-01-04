import React, { FunctionComponent } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "@/routes";

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path.toString()} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
