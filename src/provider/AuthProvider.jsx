
import { createContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
    signInWithPopup
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const createUser = async (email, password, name, photo) => {
        setLoading(true);

        try {
            const userCredintial = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredintial.user);
            const newUser = userCredintial.user;

            const response = await fetch("http://localhost:5000/userList",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(
                        {
                            email: newUser.email,
                            displayName: name,
                            photoUrl: photo,
                            userId: newUser.uid,
                            isAdmin: false,
                        }
                    )
                }

            )
            console.log(response);

            return userCredintial

        } catch (error) {
            console.error(error);
        }


    };


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    const githubSignIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
            // If a user exists/ logged in
            console.log(currentUser);
            if (currentUser) {
                try {
                    const response = await fetch(`http://localhost:5000/userList/${currentUser.uid}`);

                    if (!response.ok) {
                        throw new error("Failed to fetch");
                    }

                    const data = await response.json();
                    setUser(data);
                } catch (error) {

                }
            } else {
                setUser(null);
            }

            // setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unSubscribe();
        };

    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        githubSignIn,
        updateUserProfile,
        logOut,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
};

export default AuthProvider;