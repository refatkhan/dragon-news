import React, { createContext, useState } from 'react';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const authData ={
        user,
        setUser,
    }
    return (

        <div>

            <AuthContext value={authData}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;