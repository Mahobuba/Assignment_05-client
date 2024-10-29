import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import app from "../assets/firebase/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);
    const [registrationInProgress, setRegistrationInProgress] = useState(false); // New flag
    const auth = getAuth(app);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const dBSignIn = (currentUser) => {
        return setUser(currentUser);
    };

    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    };

    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    };

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const logOutUser = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser && !registrationInProgress) {
                try {
                    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/user/${currentUser.uid}`);

                    if (!response.ok) {
                        throw new Error("Failed to fetch");
                    }
                    const data = await response.json();
                    if (data) {
                        setUser(data)
                        setLoading(false);
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                    setUser(null);
                    setLoading(false);
                } finally {
                    setLoading(false);
                    setRegistrationInProgress(false);
                }
            } else {
                setUser(null);
                setLoading(false);
            }

        });
        return () => {
            unsubscribe();
        };
    }, [registrationInProgress]);

    const authInfo = {
        user,
        setUser,
        setRegistrationInProgress,
        loading,
        createUser,
        signIn,
        dBSignIn,
        loginWithGoogle,
        githubSignIn,
        updateUserProfile,
        logOutUser,
    };

    return (
        <>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </>
    );
};
export default AuthProvider;