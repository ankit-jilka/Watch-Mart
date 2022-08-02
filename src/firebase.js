
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClSQTW6-GHDY1bQLLRwXfAmSvV5UfJTWo",
  authDomain: "fir-auth-c644d.firebaseapp.com",
  projectId: "fir-auth-c644d",
  storageBucket: "fir-auth-c644d.appspot.com",
  messagingSenderId: "443602240986",
  appId: "1:443602240986:web:9040d5a073f0d253a82ce3"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
