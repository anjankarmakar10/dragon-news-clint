// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCRZAIbODBQTnYP-QlMUazYo6V4To5G8rA",
  authDomain: "fir-auth-2-d6b40.firebaseapp.com",
  projectId: "fir-auth-2-d6b40",
  storageBucket: "fir-auth-2-d6b40.appspot.com",
  messagingSenderId: "458406967202",
  appId: "1:458406967202:web:faa9663f004d455420e4fb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const gitHubAuthProvider = new GithubAuthProvider();
