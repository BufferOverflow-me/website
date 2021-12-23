import firebase from 'firebase/app';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
}
if (!firebase.getApps().length) {
  firebase.initializeApp(firebaseConfig);
}

// now export firebase auth instance
export const auth = firebase.auth();
