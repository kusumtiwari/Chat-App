import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import LoginPage from "../pages/login/Login";
import LoadingSpinner from "../components/common/LoadingSpinner";
import SignupPage from "../pages/signup/Signup";

const MainRoute = () => {
  return (
    <Suspense fallback={<LoadingSpinner/>}>
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<LoginPage/>}></Route>
    <Route path="/signup" element={<SignupPage/>}></Route>
    </Routes>
   </BrowserRouter>
    </Suspense>
  )
}

export default MainRoute