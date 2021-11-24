import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_BROWSER_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
};

const app = firebase.initializeApp(config);

export default app;
