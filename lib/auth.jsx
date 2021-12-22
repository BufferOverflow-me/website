import { createContext, useContext, useEffect, useState } from "react";
import firebase from "./firebase";

const authContext = createContext();


export const AuthProvider = ({ children }) => {
    const auth = useProvideAuth()
    return <authContext.Provider value={auth}>
        {children}
    </authContext.Provider>
}


// Our Auth Hook
export const useAuth = () => {
    return useContext(authContext)
}

// logic to sign in and sign out and persist the user
function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const handleUser = (rawUser) => {
        if (rawUser) {
            const user = formatUser(rawUser);
            setLoading(false);
            setUser(user);
            return user;
        }else{
            // Not logged in.
            setLoading(false);
            setUser(false);
            return false;
        }
    }
    const signInWithGithub = () =>{
        setLoading(true);
        return firebase
        .auth()
        .signInWithPopup(new firebase.auth.Auth.GithubAuthProvider())
        .then((response) => handleUser(response.user));
    }
    const signOut =() =>{
        return firebase
        .auth()
        .signOut()
        .then(()=>handleUser(false));
    }


    useEffect(()=>{
        const unsubcribe = firebase.auth.Auth().onAuthStateChanged(handleUser);
        return () => unsubcribe;
    }, [])
    return {
        user: null,
        signinWithGithub: null,
        signout: null,
    }
}

const formatUser = (user) => {
    return {
        uid: user.id,
        email: user.email,
        name: user.displayName,
        provider: user.providerData[0].providerId,
        photoUrl: user.photoURL,
    }
}