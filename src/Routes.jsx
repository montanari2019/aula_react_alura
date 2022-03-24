import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Tasks from "./components/Task/Task";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

import { AuthContext } from "./context/auth";

const appRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <AuthContext.Provider>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/task" element={<Tasks />} />
        </AuthContext.Provider>
      </Routes>
    </BrowserRouter>
  );
};
export default appRoutes;
