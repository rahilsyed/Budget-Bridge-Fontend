import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const AuthRedirect = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return isAuthenticated() ? (
    <Navigate to="/dashboard/home" replace />
  ) : (
    children
  );
};

export default AuthRedirect;
