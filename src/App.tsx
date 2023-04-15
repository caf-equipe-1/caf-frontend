import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/forms/Login/login";
import { Register } from "./components/forms/Register/register";

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
