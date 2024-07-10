// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCWeq_CyxbGC7seCdFlT72FA07-n-VcBh4",
  authDomain: "pod-kast.firebaseapp.com",
  projectId: "pod-kast",
  storageBucket: "pod-kast.appspot.com",
  messagingSenderId: "134640478711",
  appId: "1:134640478711:web:24461e1713373a179f66f2",
  measurementId: "G-E9RL913NS9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
