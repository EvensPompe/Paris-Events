import firebase from 'firebase/app';
import "firebase/auth";
import env from 'react-dotenv';

firebase.initializeApp({
  apiKey: env.API_KEY,
  authDomain: env.AUTH_DOMAIN,
  projectId: env.PROJECT_ID,
  storageBucket: env.STORAGE_BUCKET,
  messagingSenderId: env.MSENDER_ID,
  appId: env.APP_ID
})

const auth = firebase.auth();

export { auth }