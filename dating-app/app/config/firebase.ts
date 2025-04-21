import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider, OAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD0HryMTkHOI913qkONW7ljRCiSZJTy4zw",
  authDomain: "msgless-bb2db.firebaseapp.com",
  projectId: "msgless-bb2db",
  storageBucket: "msgless-bb2db.firebasestorage.app",
  messagingSenderId: "949979854608",
  appId: "1:949979854608:web:913cb58ed5a61590069795",
  measurementId: "G-36P7RY7ZVD"
};

// Initialize Firebase only on the client side and only if it hasn't been initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Get Auth instance
const auth = getAuth(app);
const storage = getStorage(app);

// Initialize providers
const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider('apple.com');

export { auth, storage, googleProvider, appleProvider };