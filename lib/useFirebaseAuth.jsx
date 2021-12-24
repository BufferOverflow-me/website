import { useState, useEffect } from "react";
import firebase from "./firebase";
import cookie from 'js-cookie';
import Router from "next/router";

const formatUser = async (user) => {
    const token = await user.getIdToken();
    return {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        provider: user.providerData[0].providerId,
        photoUrl: user.photoURL,
        token
    };
};

export default function useProvideAuth() {
    const [User, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleUser = async (rawUser) => {
        if (rawUser) {
            const user = await formatUser(rawUser);
            const { token, ...userWithoutToken } = user;
            setUser(user);
            cookie.set('bufferoverflow-auth', true, {
                expires: 1
            });
            setLoading(false);
            return user;
        } else {
            setUser(false);
            cookie.remove('bufferoverflow-auth');
            setLoading(false);
            return false;
        }
    };


    const signInWithEmailAndPassword = (email, password) => {
        setLoading(true);
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                handleUser(response.user);
                Router.push('/hello');
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    }

    const createUserWithEmailAndPassword = (email, password) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                handleUser(response.user);
                Router.push('/hello');
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    }

    const signInwithGoogle = async (redirect) => {
        setLoading(true);
        const response = await firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider());
        handleUser(response.user);
        if (redirect) {
            Router.push(redirect);
        }
    };


    const signOut = async () => {
        Router.push('/')
        await firebase.auth().signOut();
        return await handleUser(false);
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);
        return () => unsubscribe();
    }, []);

    return {
        User,
        loading,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        signInwithGoogle,
        signOut
    };
}
