import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/login";
import { Register } from "./pages/Register/register";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Login />}></Route>
          <Route path={"/register"} element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
