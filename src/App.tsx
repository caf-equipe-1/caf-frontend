import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login/login";
import { Register } from "./pages/Register/register";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Services } from "./pages/services/services";
import { Instructions } from "./pages/Instructions/instructions";
import { Photos } from "./pages/photos/Photos";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Login />}></Route>
          <Route path={"/register"} element={<Register />}></Route>
          <Route path={"/services"} element={<Services />}></Route>
          <Route path={"/instructions"} element={<Instructions />}></Route>
          <Route path={"/photos"} element={<Photos />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
