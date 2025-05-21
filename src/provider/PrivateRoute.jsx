import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';
const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation();
    if (user && user.email) {
        return children;
    }
    if (loading) {
        return <Loading></Loading>
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>


};

export default PrivateRoute;