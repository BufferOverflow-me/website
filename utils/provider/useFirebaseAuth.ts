import { useState, useEffect } from "react";
import firebase from '../firebase';

const formatAuthUser = (user: { uid: any; email: any; emailVerified: boolean; displayName: string; photoURL: string; }) => ({
    uid: user.uid,
    email: user.email,
    emailVerified: user.emailVerified,
    displayName: user.displayName,
    photoURL: user.photoURL,
});

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const authStateChanged = async (authState: { uid: any; email: any; emailVerified: boolean; displayName: string; photoURL: string; }) => {
        if (!authState) {
            setAuthUser(null);
            setLoading(false);
            return;
        }

        setLoading(true);
        var formattedUser = formatAuthUser(authState);
        setAuthUser(formattedUser);
        setLoading(false);
    };

    // Listen for firebase state change
    useEffect(() => {
        const unsubcribe = firebase.auth().onAuthStateChanged(authStateChanged);
        return () => unsubcribe();
    }, []);

    return {
        authUser,
        loading,
    };
}