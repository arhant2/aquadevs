// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIRSEBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID,
};

if (!getApps().length) {
  try {
    initializeApp(firebaseConfig);
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}

const app = getApps()[0];

export default getFirestore(app);
