import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  SignUp  from "./pages/auth/sign-up";
import  SignIn  from "./pages/auth/sign-in";
import  Dashboard  from "./pages/dashboard";



const App =()=>{
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Root />}/>
          <Route path="/login" exact element={<SignIn/>}/>
          <Route path="/register" exact element={<SignUp/>}/>
          <Route path="/home" exact element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
} 