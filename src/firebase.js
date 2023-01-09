import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyD8Uzo2jcYD0CgIA_D7togfvRdby3ToEQ8",
    authDomain: "finalproject-371220.firebaseapp.com",
    projectId: "finalproject-371220",
    storageBucket: "finalproject-371220.appspot.com",
    messagingSenderId: "856240819323",
    appId: "1:856240819323:web:1d7012cdb775d31f96e6de",
    measurementId: "G-W226FDL4H3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);