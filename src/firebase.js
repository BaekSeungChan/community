
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOTVX4zsDRrgMC4_CxDvfOOTEgPzbHo-0",
  authDomain: "react-community-d2cdc.firebaseapp.com",
  projectId: "react-community-d2cdc",
  storageBucket: "react-community-d2cdc.appspot.com",
  messagingSenderId: "218737531185",
  appId: "1:218737531185:web:c10bf10ff1e402a24c3810"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;