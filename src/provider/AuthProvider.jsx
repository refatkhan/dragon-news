import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
const auth = getAuth(app);
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage)
            });
    }
    const logOut = () => {
        return signOut(auth)
            .then(() => {
                alert('Log out success')
            }).catch((error) => {
                alert(error.message)
            });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }
    }, [])
    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        logIn
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