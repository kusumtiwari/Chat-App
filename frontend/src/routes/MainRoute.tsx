import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import LoginPage from "../pages/login/Login";
import LoadingSpinner from "../components/common/LoadingSpinner";

const MainRoute = () => {
  return (
    <Suspense fallback={<LoadingSpinner/>}>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LoginPage/>}></Route>
    </Routes>
   </BrowserRouter>
    </Suspense>
  )
}

export default MainRoute