import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route 
        path="/dashboard/*" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
      <Route path="/auth/*" element={<Auth />} />
      <Route 
        path="*" 
        element={
          <Navigate 
            to={isAuthenticated() ? "/dashboard/home" : "/auth/sign-in"} 
            replace 
          />
        } 
      />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
