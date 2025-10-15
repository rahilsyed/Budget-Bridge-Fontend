import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "@/pages/auth";
import { Home } from "@/pages/dashboard";
import ProtectedRoute from "@/pages/auth/ProtectedRoute";
import { Tables } from "@/pages/dashboard";


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<SignIn />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/tables" element={<Tables />} />
                </Route>
                 <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
        </BrowserRouter>
    )
}