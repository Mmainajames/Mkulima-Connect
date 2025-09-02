import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  projectId: 'mkulima-connect-n9ou0',
  appId: '1:246916529283:web:3a03fc2a7e1342723c2fb6',
  storageBucket: 'mkulima-connect-n9ou0.firebasestorage.app',
  apiKey: 'AIzaSyCmy9ac9GOiIAtBmCVEmHWLqjmI3kvgB3o',
  authDomain: 'mkulima-connect-n9ou0.firebaseapp.com',
  messagingSenderId: '246916529283',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
