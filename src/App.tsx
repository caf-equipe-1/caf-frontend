import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login/login";
import { Register } from "./pages/Register/register";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Services } from "./pages/services/services";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Login />}></Route>
          <Route path={"/register"} element={<Register />}></Route>
          <Route path={"/services"} element={<Services />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
